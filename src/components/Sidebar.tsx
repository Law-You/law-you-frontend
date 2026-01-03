import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Person, Language, Phone, Lock, Logout, Forum } from '@mui/icons-material';
import logo from '../assets/lawyou.png';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

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
          
          <div 
            className="sidebar-menu-item"
            onClick={() => {
              navigate('/lawtalk-hub');
              onClose();
            }}
          >
            <Forum className="sidebar-menu-icon" />
            <span>LawTalk Hub</span>
          </div>
          
          <div className="sidebar-menu-item">
            <Language className="sidebar-menu-icon" />
            <span>Language</span>
            <span className="sidebar-badge">2 New</span>
          </div>
          
          <div className="sidebar-menu-item">
            <Phone className="sidebar-menu-icon" />
            <span>Contact us</span>
          </div>
          
          <div className="sidebar-menu-item">
            <Lock className="sidebar-menu-icon" />
            <span>Privacy & Policy</span>
          </div>
        </nav>

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
    </>
  );
};

export default Sidebar;

