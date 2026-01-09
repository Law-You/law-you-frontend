import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { KeyboardArrowDown } from '@mui/icons-material';
import './navbar-clean.css';
import logo from '../assets/lawYouLogoNewSvg.svg';
import hamburgerIcon from '../assets/hamburger 1.png';
import AgreementCheckout from './AgreementCheckout';

interface NavbarProps {
  onHamburgerClick: () => void;
}

const AGREEMENTS_DATA = {
  'A': {
    title: 'Business and Commercial Agreements',
    items: ['Sale Agreement', 'Service Agreement', 'Distribution Agreement', 'Franchise Agreement', 'Joint Venture Agreement', 'Partnership Agreement', 'Memorandum of Understanding (MoU)']
  },
  'B': {
    title: 'Employment and Human Resource Agreements',
    items: ['Employment Agreement', 'Consultancy/Independent Contractor Agreement', 'Internship Agreement']
  },
  'C': {
    title: 'Property and Real Estate Agreements',
    items: ['Lease/Rent Agreement', 'Agreement to Sell / Sale Deed']
  },
  'D': {
    title: 'Finance Agreements',
    items: ['Loan Agreement', 'Guarantee Agreement']
  },
  'E': {
    title: 'Intellectual Property and Technology Agreements',
    items: ['License Agreement', 'Non-Disclosure/Confidentiality Agreement (NDA)', 'Outsourcing Agreement']
  }
};

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAgreementsDropdown, setShowAgreementsDropdown] = useState(false);
  const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowAgreementsDropdown(false);
      }
    };

    if (showAgreementsDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAgreementsDropdown]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on landing page, scroll to footer
      const footer = document.getElementById('footer-details');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash to indicate we're at contact section
        window.history.pushState(null, '', '#footer-details');
      }
    } else {
      // Navigate to landing page first, then scroll
      navigate('/#footer-details');
      setTimeout(() => {
        const footer = document.getElementById('footer-details');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleAgreementClick = (agreement: string) => {
    setSelectedAgreement(agreement);
    setShowAgreementsDropdown(false);
  };

  return (
    <div className="navbar">
      {/* Branding on the left */}
      <div className="navbar-brand">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          <img src={logo} alt="LawYou" className="navbar-logo" />
        </Link>
      </div>
      {/* Navigation links - left aligned after logo */}
      <nav className="nav-links">
        <div className="nav-links-left">
          <Link
            to="/"
            className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
          >HOME</Link>
          <Link
            to="/legal-learning"
            className={`nav-link${location.pathname === '/legal-learning' ? ' active' : ''}`}
          >RESOURCE SECTION</Link>
          <div className="agreements-dropdown-wrapper" ref={dropdownRef}>
            <button
              className="nav-link agreements-button"
              onClick={() => setShowAgreementsDropdown(!showAgreementsDropdown)}
            >
              AGREEMENTS
              <KeyboardArrowDown className={`dropdown-arrow ${showAgreementsDropdown ? 'rotated' : ''}`} />
            </button>
            
            {showAgreementsDropdown && (
              <div className="agreements-dropdown">
                {Object.entries(AGREEMENTS_DATA).map(([key, category]) => (
                  <div key={key} className="agreement-category">
                    <div className="category-header">
                      <span className="category-title">{category.title}</span>
                    </div>
                    <div className="category-items">
                      {category.items.map((item) => (
                        <button
                          key={item}
                          className="agreement-item"
                          onClick={() => handleAgreementClick(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/about"
            className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}
          >ABOUT</Link>
          <Link
            to="/"
            onClick={handleContactClick}
            className="nav-link"
          >CONTACT US</Link>
        </div>
        <div className="nav-links-right">
          <Link
            to="/lawtalk-hub"
            className={`nav-link${location.pathname === '/lawtalk-hub' ? ' active' : ''}`}
          >LAWTALK HUB</Link>
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
      
      {selectedAgreement && (
        <AgreementCheckout
          agreementName={selectedAgreement}
          onClose={() => setSelectedAgreement(null)}
        />
      )}
    </div>
  );
};

export default Navbar;
