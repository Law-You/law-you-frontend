import api from './Network/api';
import { API_ENDPOINTS } from './Network/apiEndPoints';
import { localStorageConstants } from '../constants/localStorageConstants';

export async function loginUser(email: string, password: string) {
  const response = await api.post(API_ENDPOINTS.LOGIN, {
    email,
    password,
  });

  console.log('response', response);

  if (response.data.status !== 'SUCCESS') {
    throw new Error(response.data.message || 'Failed to login');
  }

  const data = response.data.response;
  if (data?.authMetaData?.jwtToken) {
    localStorage.setItem(localStorageConstants.AUTH_TOKEN, data.authMetaData.jwtToken);
    localStorage.setItem(localStorageConstants.USER_NAME, data.userName);
  } else {
    console.warn("No token found in login response");
  }

  return data;
}
