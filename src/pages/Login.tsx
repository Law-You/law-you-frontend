import React, { useState } from 'react';
import bg3 from '../assets/bg3.jpg';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../services/loginService';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            if(response?.authMetaData?.jwtToken){
                alert('Login successful');
                // You might want to navigate to dashboard or home page here
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        }
    }
    const handleSignUp = () => {
        navigate('/signUp');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div className="login-page-wrapper">
      <div className="Login-Container d-flex flex-row p-0 h-100" style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Left half: form */}
        <div className="login-form-col d-flex flex-column justify-content-center align-items-start p-5" style={{width: '50%',borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px'}}>
          <h2 className="mb-4">LOGIN</h2>
          <form className="w-100" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label text-start w-100">Email</label>
              <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label text-start w-100">Password</label>
              <div className="password-input-container" style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="form-control" 
                  id="loginPassword" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  style={{ paddingRight: '45px' }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: '5px',
                    color: '#6c757d'
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.708zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="mb-3 text-start">
              <a href="#" className="small">Forgot Password?</a>
            </div>
            <button type="submit" className="btn" style={{ width: '100%', background: '#3730a3', color: '#fff' }}>Sign in</button>
            <div className="mb-3 text-start">
              <a href="#" className="small" onClick={handleSignUp}>Don't have an account? <span style={{color:"#3A8DFF"}}>Sign up</span></a>
            </div>
          </form>
        </div>
        {/* Right half: empty, just shows background image */}
        <div className="login-bg-col" style={{width: '50%'}}></div>
      </div>
    </div>

  );
};

export default Login;
