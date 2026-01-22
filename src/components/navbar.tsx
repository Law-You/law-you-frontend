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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAgreementsOpen, setMobileAgreementsOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">
        {/* Branding on the left */}
        <div className="navbar-brand">
          <Link
            to="/"
            onClick={closeMobileMenu}
            style={{
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            <img src={logo} alt="LawYou" className="navbar-logo" />
          </Link>
        </div>
        
        {/* Desktop Navigation links */}
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
              <img src={hamburgerIcon} alt="Sidebar Menu" className="hamburger-icon-nav" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Actions (shown only on mobile) */}
        <div className="mobile-nav-actions">
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Open navigation menu">
            <img src={hamburgerIcon} alt="Menu" className="hamburger-icon-nav" />
          </button>
          <button
            className="hamburger-button-nav mobile-sidebar-toggle"
            onClick={onHamburgerClick}
            aria-label="Open sidebar"
          >
            <img src={hamburgerIcon} alt="Sidebar Menu" className="hamburger-icon-nav" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button className="mobile-menu-close" onClick={closeMobileMenu}>×</button>
        </div>
        <div className="mobile-menu-links">
          <Link
            to="/"
            className={`mobile-menu-link${location.pathname === '/' ? ' active' : ''}`}
            onClick={closeMobileMenu}
          >HOME</Link>
          <Link
            to="/legal-learning"
            className={`mobile-menu-link${location.pathname === '/legal-learning' ? ' active' : ''}`}
            onClick={closeMobileMenu}
          >RESOURCE SECTION</Link>
          
          {/* Mobile Agreements Section */}
          <div className="mobile-agreements-section">
            <button
              className={`mobile-menu-link mobile-agreements-toggle ${mobileAgreementsOpen ? 'open' : ''}`}
              onClick={() => setMobileAgreementsOpen(!mobileAgreementsOpen)}
              style={{ background: 'transparent', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>AGREEMENTS</span>
              <span className="mobile-agreements-arrow">{mobileAgreementsOpen ? '−' : '+'}</span>
            </button>
            {mobileAgreementsOpen && (
              <div className="mobile-agreements-dropdown">
                {Object.entries(AGREEMENTS_DATA).map(([key, category]) => (
                  <div key={key} className="mobile-agreement-category">
                    <div className="mobile-category-header">
                      <span className="mobile-category-title">{category.title}</span>
                    </div>
                    <div className="mobile-category-items">
                      {category.items.map((item) => (
                        <button
                          key={item}
                          className="mobile-agreement-item"
                          onClick={() => {
                            handleAgreementClick(item);
                            setMobileAgreementsOpen(false);
                            closeMobileMenu();
                          }}
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
            className={`mobile-menu-link${location.pathname === '/about' ? ' active' : ''}`}
            onClick={closeMobileMenu}
          >ABOUT</Link>
          <Link
            to="/"
            className="mobile-menu-link"
            onClick={(e) => {
              e.preventDefault();
              closeMobileMenu();
              handleContactClick(e);
            }}
          >CONTACT US</Link>
          <Link
            to="/lawtalk-hub"
            className={`mobile-menu-link${location.pathname === '/lawtalk-hub' ? ' active' : ''}`}
            onClick={closeMobileMenu}
          >LAWTALK HUB</Link>
          <Link
            to="/login"
            className="mobile-menu-link"
            onClick={closeMobileMenu}
          >LOG IN</Link>
          <button
            className="mobile-menu-link"
            onClick={() => {
              closeMobileMenu();
              onHamburgerClick();
            }}
            style={{ background: 'transparent', border: 'none', textAlign: 'left', width: '100%', cursor: 'pointer' }}
          >
            Sidebar Menu
          </button>
        </div>
      </div>
      
      {selectedAgreement && (
        <AgreementCheckout
          agreementName={selectedAgreement}
          onClose={() => setSelectedAgreement(null)}
        />
      )}
    </>
  );
};

export default Navbar;
