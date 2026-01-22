import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff, Home } from '@mui/icons-material';
import logo from '../assets/lawyouNewLogo2.svg';
import '../styles/login.css';
import { theme } from '../constants/theme';

// Custom Animated Toggle Button Group Component
interface RoleToggleProps {
  value: string;
  onChange: (value: string) => void;
}

const RoleToggle: React.FC<RoleToggleProps> = ({ value, onChange }) => {
  const options = [
    { label: 'Student', value: 'student' },
    { label: 'Client', value: 'client' },
    { label: 'Lawyer', value: 'lawyer' },
  ];

  const selectedIndex = options.findIndex((opt) => opt.value === value);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        backgroundColor: theme.colors.backgroundDark,
        width: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Sliding Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: `${(selectedIndex * 100) / 3}%`,
          width: `${100 / 3}%`,
          height: '100%',
          backgroundColor: theme.colors.primary,
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 0,
          borderRadius: selectedIndex === 0 
            ? '8px 0 0 8px' 
            : selectedIndex === options.length - 1 
            ? '0 8px 8px 0' 
            : '0',
        }}
      />
      
      {/* Buttons */}
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => onChange(option.value)}
          sx={{
            flex: 1,
            padding: { xs: '6px 12px', sm: '8px 16px', md: '8px 24px' },
            textTransform: 'none',
            fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
            fontWeight: 600,
            border: 'none',
            position: 'relative',
            zIndex: 1,
            color: value === option.value ? theme.colors.textWhite : theme.colors.primary,
            backgroundColor: 'transparent',
            transition: 'color 0.3s ease',
            borderRadius: 0,
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {option.label}
        </Button>
      ))}
    </Box>
  );
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Add your signup logic here
    console.log('Signup:', { fullName, email, password, role });
    navigate('/login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', lg: 'hidden' },
      }}
    >
      {/* Home Button */}
      <IconButton
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          top: { xs: '16px', md: '24px' },
          left: { xs: '16px', md: '24px' },
          zIndex: 1000,
          backgroundColor: theme.colors.backgroundBlack,
          color: theme.colors.textWhite,
          '&:hover': {
            backgroundColor: theme.colors.backgroundBlackHover,
          },
        }}
      >
        <Home />
      </IconButton>

      {/* Left Panel - White Background */}
      <Box
        sx={{
          width: { xs: '100%', lg: '50%' },
          minHeight: { xs: 'auto', lg: '100vh' },
          backgroundColor: theme.colors.background,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: { xs: '80px 24px 40px', sm: '100px 32px 48px', md: '120px 48px 60px', lg: '80px 60px', xl: '80px 100px' },
          position: 'relative',
        }}
      >
        {/* Content wrapper */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '600px',
          }}
        >
          {/* Logo */}
          <Box sx={{ 
            marginBottom: { xs: '32px', md: '-170px' }, 
            marginLeft: { xs: 0, md: '-55px' },
            width: '100%',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}>
            <Box
              component="img"
              src={logo}
              alt="LawYou"
              sx={{
                maxWidth: { xs: '200px', sm: '240px', md: '280px' },
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Box>

          {/* Headline */}
          <Box sx={{ marginBottom: { xs: '32px', md: '40px' }, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                color: theme.colors.textPrimary,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.5rem', xl: '3rem' },
                lineHeight: 1.1,
                marginBottom: { xs: '16px', md: '24px' },
                letterSpacing: '-0.02em',
              }}
            >
              Define the future of
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                color: theme.colors.primary,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem', xl: '6rem' },
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginTop: { xs: '-8px', md: '-10px' },
              }}
            >
              JUSTICE
            </Typography>
          </Box>

          {/* Tagline */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.colors.textSecondary,
                fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' },
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: { xs: '100%', md: '520px' },
                margin: { xs: '0 auto', md: '0' },
              }}
            >
              Access the world's most advanced legal learning modules. Connect
              with top firms. Build your case portfolio.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Panel - Black Background with Signup Form */}
      <Box
        sx={{
          width: { xs: '100%', lg: '50%' },
          minHeight: { xs: 'auto', lg: '100vh' },
          backgroundColor: theme.colors.backgroundBlack,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '48px 24px', sm: '60px 32px', md: '60px 48px', lg: '60px 60px', xl: '60px 80px' },
        }}
      >
        <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: '500px' } }}>
          {/* Welcome Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: theme.colors.textWhite,
              marginBottom: { xs: '12px', md: '16px' },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem' },
              textAlign: 'center',
            }}
          >
            Welcome
          </Typography>

          {/* Instructions */}
          <Typography
            variant="body1"
            sx={{
              color: theme.colors.textWhite,
              marginBottom: { xs: '32px', md: '40px' },
              fontSize: { xs: '0.9375rem', md: '1rem' },
              opacity: 0.8,
              textAlign: 'center',
            }}
          >
            Create your account to get started
          </Typography>

          {/* Role Toggle Buttons with Sliding Animation */}
          <Box sx={{ marginBottom: { xs: '32px', md: '40px' } }}>
            <RoleToggle value={role} onChange={setRole} />
          </Box>

          {/* Signup Form */}
          <form onSubmit={handleSignup}>
            {/* Full Name Input */}
            <TextField
              fullWidth
              label="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
                required
              sx={{
                marginBottom: '24px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#2a2a2a',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#404040',
                  },
                  '&:hover fieldset': {
                    borderColor: '#606060',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#146ADA',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.colors.textWhite,
                  '&.Mui-focused': {
                    color: '#146ADA',
                  },
                },
                '& .MuiInputBase-input': {
                  color: theme.colors.textWhite,
                },
              }}
            />

            {/* Email Input */}
            <TextField
              fullWidth
              label="E-Mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                marginBottom: '24px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#2a2a2a',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#404040',
                  },
                  '&:hover fieldset': {
                    borderColor: '#606060',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#146ADA',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.colors.textWhite,
                  '&.Mui-focused': {
                    color: '#146ADA',
                  },
                },
                '& .MuiInputBase-input': {
                  color: theme.colors.textWhite,
                },
              }}
            />

            {/* Password Input */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                marginBottom: '24px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#2a2a2a',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#404040',
                  },
                  '&:hover fieldset': {
                    borderColor: '#606060',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#146ADA',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.colors.textWhite,
                  '&.Mui-focused': {
                    color: '#146ADA',
                  },
                },
                '& .MuiInputBase-input': {
                  color: theme.colors.textWhite,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                      sx={{ color: '#ffffff' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password Input */}
            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              sx={{
                marginBottom: '32px',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#2a2a2a',
                  borderRadius: '8px',
                  '& fieldset': {
                    borderColor: '#404040',
                  },
                  '&:hover fieldset': {
                    borderColor: '#606060',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#146ADA',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.colors.textWhite,
                  '&.Mui-focused': {
                    color: '#146ADA',
                  },
                },
                '& .MuiInputBase-input': {
                  color: theme.colors.textWhite,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                      sx={{ color: theme.colors.textWhite }}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Sign Up Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.textWhite,
                padding: '14px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '8px',
                marginBottom: '16px',
                '&:hover': {
                  backgroundColor: theme.colors.primaryDark,
                },
              }}
            >
              Sign up
            </Button>

            {/* Sign In Link */}
            <Box sx={{ textAlign: 'center', marginBottom: '32px' }}>
              <Typography
                sx={{
                  color: theme.colors.textWhite,
                  fontSize: '0.9rem',
                }}
              >
                Already have an account?{' '}
                <Button
                  onClick={() => navigate('/login')}
                  sx={{
                    color: theme.colors.primary,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    padding: 0,
                    minWidth: 'auto',
                    textDecoration: 'underline',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign in
                </Button>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
