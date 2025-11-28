
import { Link, useLocation } from 'react-router-dom';
import './navbar-clean.css';
import logo from '../assets/lawyou.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      {/* Branding on the left */}
      <div className="navbar-brand">
        <img src={logo} alt="LawYou" className="navbar-logo" />
      </div>
      {/* Navigation links on the right */}
      <nav className="nav-links">
        <Link
          to="/"
          className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
        >HOME</Link>
        <Link
          to="/exploreServices"
          className={`nav-link${location.pathname === '/exploreServices' ? ' active' : ''}`}
        >EXPLORE SERVICES</Link>
        <Link
          to="/findLawyer"
          className={`nav-link${location.pathname === '/findLawyer' ? ' active' : ''}`}
        >FIND A LAWYER</Link>
        <Link
          to="/login"
          className={`nav-link${location.pathname === '/login' ? ' active' : ''}`}
        >LOGIN</Link>
        <Link
          to="/findLawyer"
          className="nav-button"
        >Book Consultation</Link>
      </nav>
    </div>
  );
};

export default Navbar;
