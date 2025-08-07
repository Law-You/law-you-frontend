import React, { useState } from 'react';
import bg3 from '../assets/bg3.jpg';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Use selectedRole as the chosen value in your signup logic
    navigate('/login');
  };

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div>
      <div
        className="Login-Container d-flex flex-row p-0 h-100"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div
          className="login-form-col d-flex flex-column justify-content-center align-items-start p-5"
          style={{ width: '50%', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px' }}
        >
          <h2 className="mb-4">SIGN UP</h2>
          <form className="w-100" onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="signupName" className="form-label text-start w-100">
                Full Name
              </label>
              <input type="text" className="form-control" id="signupName" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signupEmail" className="form-label text-start w-100">
                Email
              </label>
              <input type="email" className="form-control" id="signupEmail" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signupPassword" className="form-label text-start w-100">
                Password
              </label>
              <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" required />
            </div>
            <div className="mb-4">
              <label htmlFor="signupPasswordConfirm" className="form-label text-start w-100">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signupPasswordConfirm"
                placeholder="Re-enter your password"
                required
              />
            </div>
            {/* Role Selection (Radio) */}
            <div className="mb-4">
              <label className="form-label text-start w-100">Select your role</label>
              <div className="d-flex gap-3">
                <div>
                  <input
                    type="radio"
                    id="roleStudent"
                    name="role"
                    value="student"
                    checked={selectedRole === 'student'}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="roleStudent" className="ms-1">Student</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="roleLawyer"
                    name="role"
                    value="lawyer"
                    checked={selectedRole === 'lawyer'}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="roleLawyer" className="ms-1">Lawyer</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="roleCustomer"
                    name="role"
                    value="customer"
                    checked={selectedRole === 'customer'}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="roleCustomer" className="ms-1">Customer</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign up</button>
            <div className="my-3 text-start">
              <a href="#" className="small" onClick={handleSignIn}>
                Already have an account? <span style={{ color: '#3A8DFF' }}>Sign in</span>
              </a>
            </div>
          </form>
        </div>
        <div className="login-bg-col" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
};

export default SignUp;
