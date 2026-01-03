import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar-clean.css';
import logo from '../assets/lawyou.png';
import hamburgerIcon from '../assets/hamburger 1.png';

interface NavbarProps {
  onHamburgerClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick }) => {
  const location = useLocation();

  return (
    <div className="navbar">
      {/* Branding on the left */}
      <div className="navbar-brand">
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '8px 12px',
            display: 'inline-block',
          }}
        >
          <img src={logo} alt="LawYou" className="navbar-logo" />
        </div>
      </div>
      {/* Navigation links - left aligned after logo */}
      <nav className="nav-links">
        <div className="nav-links-left">
          <Link
            to="/"
            className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
          >HOME</Link>
          <Link
            to="/about"
            className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}
          >ABOUT</Link>
          <Link
            to="/exploreServices"
            className={`nav-link${location.pathname === '/exploreServices' ? ' active' : ''}`}
          >SERVICE</Link>
          <Link
            to="/"
            className={`nav-link${location.pathname === '/testimonial' ? ' active' : ''}`}
          >TESTIMONIAL</Link>
          <Link
            to="/"
            className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`}
          >CONTACT</Link>
        </div>
        <div className="nav-links-right">
          <Link
            to="/exploreServices"
            className="nav-link"
          >EXPLORE</Link>
          <Link
            to="/login"
            className="nav-button"
          >LOG IN</Link>
          <button
            className="hamburger-button-nav"
            onClick={onHamburgerClick}
          >
            <img src={hamburgerIcon} alt="Menu" className="hamburger-icon-nav" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
