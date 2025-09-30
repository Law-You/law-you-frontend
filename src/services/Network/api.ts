import axios from 'axios';
import { localStorageConstants } from '../../constants/localStorageConstants';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  console.error('API_BASE_URL is not defined in environment variables');
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
});

// Attach token and geo-location to each request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(localStorageConstants.AUTH_TOKEN);
    if (token) config.headers.Authorization = `Bearer ${token}`;

    const geoLocation = localStorage.getItem(localStorageConstants.GEO_LOCATION);
    if (geoLocation) config.headers['Geo-Location'] = geoLocation;

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle API errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = 'An unexpected error occurred';
    let shouldShowError = true;

    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          errorMessage = data?.message || 'Bad request. Please check your input.';
          break;
        case 401:
          errorMessage = 'Your session has expired. Please log in again.';
          shouldShowError = false; // Don't show error popup for auth redirects
          localStorage.removeItem(localStorageConstants.AUTH_TOKEN);
          localStorage.removeItem(localStorageConstants.GEO_LOCATION);
          // Use React Router navigation instead of window.location for better UX
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
          break;
        case 403:
          errorMessage = 'Access denied. You don\'t have permission to perform this action.';
          break;
        case 404:
          errorMessage = 'The requested resource was not found.';
          break;
        case 408:
          errorMessage = 'Request timeout. Please try again.';
          break;
        case 422:
          errorMessage = data?.message || 'Validation error. Please check your input.';
          break;
        case 429:
          errorMessage = 'Too many requests. Please wait a moment and try again.';
          break;
        case 500:
          errorMessage = 'Server error. Please try again later.';
          break;
        case 502:
          errorMessage = 'Bad gateway. Please try again later.';
          break;
        case 503:
          errorMessage = 'Service temporarily unavailable. Please try again later.';
          break;
        case 504:
          errorMessage = 'Gateway timeout. Please try again later.';
          break;
        default:
          errorMessage = data?.message || `Server error (${status}). Please try again.`;
      }
    } else if (error.request) {
      // Request was made but no response received
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection and try again.';
      } else if (error.message.includes('Network Error')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else {
        errorMessage = 'No response from server. Please check your connection and try again.';
      }
    } else {
      // Something else happened
      if (error.message.includes('timeout')) {
        errorMessage = 'Request timeout. Please try again.';
      } else {
        errorMessage = error.message || 'An unexpected error occurred.';
      }
    }

    // Log error for debugging
    console.error('API Error:', {
      message: errorMessage,
      status: error.response?.status,
      url: error.config?.url,
      method: error.config?.method,
      data: error.response?.data,
      originalError: error
    });

    // Show error popup if needed
    if (shouldShowError && window.showErrorPopup) {
      window.showErrorPopup(errorMessage);
    }

    return Promise.reject({
      ...error,
      userMessage: errorMessage
    });
  }
);

// Helper function to show error popup from outside React components
window.showErrorPopup = (message: string) => {
  // This will be set by the ErrorProvider
  if (window.errorContext?.showError) {
    window.errorContext.showError(message);
  }
};

declare global {
  interface ImportMeta {
    env: {
      VITE_API_BASE_URL: string;
      [key: string]: string;
    };
  }
  interface Window {
    showErrorPopup?: (message: string) => void;
    errorContext?: { showError: (msg: string) => void };
  }
}

export default api;
