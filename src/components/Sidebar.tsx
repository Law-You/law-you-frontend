import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Person, Logout } from '@mui/icons-material';
import logo from '../assets/lawYouLogoNewSvg.svg';
import JoinUsDialog from './JoinUsDialog';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showJoinUsDialog, setShowJoinUsDialog] = useState(false);

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo-container">
          <img src={logo} alt="LawYou" className="sidebar-logo-img" />
          {/* <span className="sidebar-logo-text">LAW YOU</span> */}
        </div>
        
        <nav className="sidebar-menu">
          <div 
            className="sidebar-menu-item"
            onClick={() => {
              navigate('/profile');
              onClose();
            }}
          >
            <Person className="sidebar-menu-icon" />
            <span>My profile</span>
          </div>
          
          
          {/* <div className="sidebar-menu-item">
            <Lock className="sidebar-menu-icon" />
            <span>Privacy & Policy</span>
          </div> */}
        </nav>

        {/* Ad Placeholder Section */}
        <div className="sidebar-ad-placeholder">
          <div className="ad-placeholder-content">
            <div className="ad-placeholder-icon">📢</div>
            <p className="ad-placeholder-text">Partner with Us</p>
            <p className="ad-placeholder-subtext">Showcase your brand here</p>
          </div>
        </div>

        {/* Join With Us Button */}
        <button 
          className="sidebar-join-us-button"
          onClick={() => setShowJoinUsDialog(true)}
        >
          Join With Us
        </button>

        <div className="sidebar-divider" />
        
        <button 
          className="sidebar-logout"
          onClick={() => {
            navigate('/login');
            onClose();
          }}
        >
          <Logout className="sidebar-logout-icon" />
          <span>Logout</span>
        </button>
      </div>

      {/* Join Us Dialog */}
      {showJoinUsDialog && (
        <JoinUsDialog onClose={() => setShowJoinUsDialog(false)} />
      )}
    </>
  );
};

export default Sidebar;

