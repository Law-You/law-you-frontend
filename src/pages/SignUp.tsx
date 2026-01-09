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
        marginBottom: '40px',
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
            padding: '8px 24px',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            border: 'none',
            position: 'relative',
            zIndex: 1,
            color: value === option.value ? theme.colors.textWhite : theme.colors.primary,
            backgroundColor: 'transparent',
            transition: 'color 0.3s ease',
            borderRadius: 0,
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
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
      }}
    >
      {/* Home Button */}
      <IconButton
        onClick={() => navigate('/')}
        sx={{
          position: 'absolute',
          top: '24px',
          left: '24px',
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
          width: '50%',
          backgroundColor: theme.colors.background,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: { xs: '40px 40px', md: '60px 80px', lg: '80px 100px' },
          position: 'relative',
          overflow: 'hidden',
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
          <Box sx={{ marginBottom: '-170px', marginLeft: '-55px' }}>
            <Box
              component="img"
              src={logo}
              alt="LawYou"
              sx={{
                maxWidth: '280px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Box>

          {/* Headline */}
          <Box sx={{ marginBottom: '40px' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                color: theme.colors.textPrimary,
                fontSize: { xs: '1.5rem', md: '2.5rem', lg: '3rem' },
                lineHeight: 1.1,
                marginBottom: '24px',
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
                fontSize: { xs: '3.5rem', md: '5rem', lg: '6rem' },
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginTop: '-10px',
              }}
            >
              JUSTICE
            </Typography>
          </Box>

          {/* Tagline */}
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: theme.colors.textSecondary,
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: '520px',
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
          width: '50%',
          backgroundColor: theme.colors.backgroundBlack,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 80px',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '500px' }}>
          {/* Welcome Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: theme.colors.textWhite,
              marginBottom: '16px',
              fontSize: '2.5rem',
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
              marginBottom: '40px',
              fontSize: '1rem',
              opacity: 0.8,
              textAlign: 'center',
            }}
          >
            Create your account to get started
          </Typography>

          {/* Role Toggle Buttons with Sliding Animation */}
          <RoleToggle value={role} onChange={setRole} />

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
