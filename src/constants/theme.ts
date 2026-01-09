// Theme Colors
export const theme = {
  colors: {
    // Background Colors
    background: '#FFFFFF',
    backgroundDark: '#F5F5F5', // For cards/sections that need slight contrast
    backgroundSecondary: '#FAFAFA', // For alternate sections
    backgroundBlack: '#000000', // For light backgrounds
    backgroundBlackHover: '#2a2a2a', // Slightly lighter than #000000 for hover effects

    
    // Text Colors
    textPrimary: '#000000',
    textSecondary: '#666666', // For secondary text
    textTertiary: '#999999', // For muted text
    textWhite: '#FFFFFF', // For text on dark backgrounds
    
    // Primary Colors
    primary: '#146ADA', // Main button color, primary actions
    primaryDark: '#0E5AA8', // Hover state for primary
    primaryLight: '#3B8AE8', // Lighter variant
    
    // Accent Colors (keeping existing blue for specific elements)
    accent: '#251790', // For specific UI elements that need the darker blue
    accentLight: '#3B2BA0',
    
    // Status Colors
    success: '#22C55E',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
    
    // Border Colors
    border: '#E5E7EB',
    borderDark: '#D1D5DB',
    
    // Overlay/Shadow
    overlay: 'rgba(0, 0, 0, 0.5)',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  
  // Spacing (optional, for consistency)
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
};

export default theme;

