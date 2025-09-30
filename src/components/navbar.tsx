import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar-clean.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      {/* Branding on the left */}
      <div className="navbar-brand">
        <span className="blue">LAW</span>
        <span className="black"> YOU</span>
      </div>
      {/* Navigation links on the right */}
      <nav className="nav-links">
        <Link
          to="/"
          className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
        >HOME</Link>
        <Link
          to="/for-client"
          className={`nav-link${location.pathname === '/for-client' ? ' active' : ''}`}
        >FOR CLIENT</Link>
        <Link
          to="/for-lawyers"
          className={`nav-link${location.pathname === '/for-lawyers' ? ' active' : ''}`}
        >FOR LAWYERS</Link>
        <Link
          to="/admin"
          className={`nav-link${location.pathname === '/admin' ? ' active' : ''}`}
        >ADMIN</Link>
        <Link
          to="/legal-topics"
          className={`nav-link${location.pathname === '/legal-topics' ? ' active' : ''}`}
        >LEGAL TOPICS</Link>
        <Link
          to="/login"
          className={`nav-link${location.pathname === '/login' ? ' active' : ''}`}
        >Log in</Link>
        <Link
          to="/book-consultation"
          className="nav-button"
        >Book Consultation</Link>
      </nav>
    </div>
  );
};

export default Navbar;
