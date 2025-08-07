import React from 'react';
import bg3 from '../assets/bg3.jpg';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/dashboard');
    }
    const handleSignUp = () => {
        navigate('/signUp');
    }
  return (
    <div>
      <div className="Login-Container d-flex flex-row p-0 h-100" style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Left half: form */}
        <div className="login-form-col d-flex flex-column justify-content-center align-items-start p-5" style={{width: '50%',borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px'}}>
          <h2 className="mb-4">LOGIN</h2>
          <form className="w-100">
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label text-start w-100">Email</label>
              <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label text-start w-100">Password</label>
              <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" />
            </div>
            <div className="mb-3 text-start">
              <a href="#" className="small">Forgot Password?</a>
            </div>
            <button onClick={handleLogin} type="submit" className="btn btn-primary w-100">Sign in</button>
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
