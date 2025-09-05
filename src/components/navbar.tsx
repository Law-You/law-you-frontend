import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar-clean.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      {/* Branding on the left */}
      <div className="navbar-brand">
        <span className="blue">Law</span>
        <span className="black">You</span>
      </div>
      {/* Navigation links on the right */}
      <nav className="nav-links">
        <Link
          to="/"
          className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
        >Home</Link>
        <Link
          to="/products"
          className={`nav-link${location.pathname === '/products' ? ' active' : ''}`}
        >Products</Link>
        <Link
          to="/services"
          className={`nav-link${location.pathname === '/services' ? ' active' : ''}`}
        >Services</Link>
        <Link
          to="/about"
          className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}
        >About</Link>
        <Link
          to="/login"
          className={`nav-link${location.pathname === '/login' ? ' active' : ''}`}
        >Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
