import React, { useState } from 'react';
import { Person, Language, Payment, Delete, Camera } from '@mui/icons-material';
import profileIcon from '../assets/profileicon.png';
import './ProfileSettings.css';

const ProfileSettings: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('edit-profile');

  return (
    <div className="profile-settings-page">
      <div className="profile-main-content">
        <div className="profile-layout">
          {/* Left Sidebar Navigation */}
          <div className="profile-left-sidebar">
            <h1 className="profile-page-title">Profile Settings</h1>
            <p className="profile-page-subtitle">Keep your profile fresh</p>
            
            <nav className="profile-nav-menu">
              <div 
                className={`profile-nav-item ${activeMenuItem === 'edit-profile' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('edit-profile')}
              >
                <Person className="profile-nav-icon" />
                <span>Edit Profile</span>
              </div>
              
              <div 
                className={`profile-nav-item ${activeMenuItem === 'language' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('language')}
              >
                <Language className="profile-nav-icon" />
                <span>Language</span>
              </div>
              
              <div 
                className={`profile-nav-item ${activeMenuItem === 'payments' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('payments')}
              >
                <Payment className="profile-nav-icon" />
                <span>Payments</span>
              </div>
            </nav>

            <button className="delete-account-button">
              <Delete className="delete-account-icon" />
              <span>Delete account</span>
            </button>
          </div>

          {/* Center Content */}
          <div className="profile-center-content">
            {/* Edit Profile Card */}
            <div className="profile-card">
              <h2 className="profile-card-title">Edit Profile</h2>
              <div className="profile-picture-section">
                <div className="profile-picture-container">
                  <img src={profileIcon} alt="Profile" className="profile-picture-image" />
                  <button className="profile-camera-button">
                    <Camera className="camera-icon" />
                  </button>
                </div>
                <div className="profile-upload-info">
                  <p className="upload-text">Upload new photo</p>
                  <p className="upload-details">At least 600 x 600 px recommended.</p>
                  <p className="upload-details">JPG or PNG is allowed</p>
                </div>
              </div>
              <button className="edit-button">Edit</button>
            </div>

            {/* Personal Info Card */}
            <div className="profile-card">
              <h2 className="profile-card-title">Personal Info</h2>
              <div className="personal-info-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label>Mail</label>
                    <input type="email" className="form-input" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Phone</label>
                    <input type="tel" className="form-input" />
                  </div>
                  <div className="form-field">
                    <label>Location</label>
                    <input type="text" className="form-input" />
                  </div>
                </div>
                <div className="form-actions">
                  <button className="cancel-button">Cancel</button>
                  <button className="save-button">Save changes</button>
                </div>
              </div>
            </div>

            {/* Bio Card */}
            <div className="profile-card">
              <h2 className="profile-card-title">Bio</h2>
              <textarea 
                className="bio-textarea"
                placeholder="Here for the legal help"
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="profile-right-sidebar">
            <h2 className="complete-profile-title">Complete your profile</h2>
            <div className="progress-circle-container">
              <svg className="progress-circle" viewBox="0 0 100 100">
                <circle
                  className="progress-circle-background"
                  cx="50"
                  cy="50"
                  r="45"
                />
                <circle
                  className="progress-circle-fill"
                  cx="50"
                  cy="50"
                  r="45"
                  strokeDasharray={`${80 * 2.827} ${100 * 2.827}`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="progress-text">80%</div>
              <div className="progress-label">Completed</div>
            </div>
            
            <div className="profile-checklist">
              <div className="checklist-item completed">
                <span className="checkmark">✓</span>
                <span>Set up account</span>
              </div>
              <div className="checklist-item completed">
                <span className="checkmark">✓</span>
                <span>Upload photo</span>
              </div>
              <div className="checklist-item completed">
                <span className="checkmark">✓</span>
                <span>Personal info</span>
              </div>
              <div className="checklist-item">
                <span>Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;

