import React, { useState } from 'react';
import { Person, Delete, Camera, Edit } from '@mui/icons-material';
import profileIcon from '../assets/profileicon.png';
import './ProfileSettings.css';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  photo: string;
}

const ProfileSettings: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('my-profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    photo: profileIcon
  });

  const [tempData, setTempData] = useState<ProfileData>(profileData);

  // Calculate completion percentage
  const calculateCompletion = () => {
    const fields = [
      profileData.fullName,
      profileData.email,
      profileData.phone,
      profileData.location
    ];
    const filledFields = fields.filter(field => field.trim() !== '').length;
    return Math.round((filledFields / fields.length) * 100);
  };

  const completion = calculateCompletion();

  // Get completion color (red to yellow to green)
  const getCompletionColor = (percentage: number) => {
    if (percentage <= 33) return '#EF4444'; // Red
    if (percentage <= 66) return '#F59E0B'; // Orange/Yellow
    return '#22C55E'; // Green
  };

  const handleEditProfile = () => {
    setTempData(profileData);
    setIsEditingProfile(true);
  };

  const handleCancelProfileEdit = () => {
    setTempData(profileData);
    setIsEditingProfile(false);
  };

  const handleSaveProfile = () => {
    setProfileData(tempData);
    setIsEditingProfile(false);
  };

  const handleEditPersonalInfo = () => {
    setTempData(profileData);
    setIsEditingPersonalInfo(true);
  };

  const handleCancelPersonalInfo = () => {
    setTempData(profileData);
    setIsEditingPersonalInfo(false);
  };

  const handleSavePersonalInfo = () => {
    setProfileData(tempData);
    setIsEditingPersonalInfo(false);
  };

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setTempData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="profile-settings-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="profile-main-content">
        <div className="profile-layout">
          {/* Left Sidebar Navigation */}
          <div className="profile-left-sidebar">
            <h1 className="profile-page-title">Profile Settings</h1>
            <p className="profile-page-subtitle">Keep your profile fresh</p>
            
            <nav className="profile-nav-menu">
              <div 
                className={`profile-nav-item ${activeMenuItem === 'my-profile' ? 'active' : ''}`}
                onClick={() => setActiveMenuItem('my-profile')}
              >
                <Person className="profile-nav-icon" />
                <span>My profile</span>
              </div>
            </nav>

            <button className="delete-account-button">
              <Delete className="delete-account-icon" />
              <span>Delete account</span>
            </button>
          </div>

          {/* Center Content */}
          <div className="profile-center-content">
            {/* User Name Header */}
            <div className="profile-user-header">
              <h1 className="profile-user-name">
                {profileData.fullName || 'Guest User'}
              </h1>
              <p className="profile-user-subtitle">Manage your profile information</p>
            </div>
            {/* Edit Profile Card */}
            <div className="profile-card">
              <div className="card-header-with-action">
                <h2 className="profile-card-title">Edit Profile</h2>
                {!isEditingProfile && (
                  <button className="edit-action-button" onClick={handleEditProfile}>
                    <Edit className="edit-icon" />
                    Edit
                  </button>
                )}
              </div>
              
              {isEditingProfile ? (
                <>
                  <div className="profile-picture-section">
                    <div className="profile-picture-container">
                      <img src={tempData.photo} alt="Profile" className="profile-picture-image" />
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
                  <div className="form-actions">
                    <button className="cancel-button" onClick={handleCancelProfileEdit}>Cancel</button>
                    <button className="save-button" onClick={handleSaveProfile}>Save changes</button>
                  </div>
                </>
              ) : (
                <div className="profile-picture-section">
                  <div className="profile-picture-container">
                    <img src={profileData.photo} alt="Profile" className="profile-picture-image" />
                  </div>
                </div>
              )}
            </div>

            {/* Personal Info Card */}
            <div className="profile-card">
              <div className="card-header-with-action">
                <h2 className="profile-card-title">Personal Info</h2>
                {!isEditingPersonalInfo && (
                  <button className="edit-action-button" onClick={handleEditPersonalInfo}>
                    <Edit className="edit-icon" />
                    Edit
                  </button>
                )}
              </div>
              
              {isEditingPersonalInfo ? (
                <div className="personal-info-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        value={tempData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-field">
                      <label>Email</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        value={tempData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Phone</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        value={tempData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="form-field">
                      <label>Location</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        value={tempData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Enter your location"
                      />
                    </div>
                  </div>
                  <div className="form-actions">
                    <button className="cancel-button" onClick={handleCancelPersonalInfo}>Cancel</button>
                    <button className="save-button" onClick={handleSavePersonalInfo}>Save changes</button>
                  </div>
                </div>
              ) : (
                <div className="info-display">
                  <div className="info-row">
                    <div className="info-item">
                      <label>Full Name</label>
                      <p>{profileData.fullName || 'Not set'}</p>
                    </div>
                    <div className="info-item">
                      <label>Email</label>
                      <p>{profileData.email || 'Not set'}</p>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-item">
                      <label>Phone</label>
                      <p>{profileData.phone || 'Not set'}</p>
                    </div>
                    <div className="info-item">
                      <label>Location</label>
                      <p>{profileData.location || 'Not set'}</p>
                    </div>
                  </div>
                </div>
              )}
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
                  stroke={getCompletionColor(completion)}
                  strokeDasharray={`${completion * 2.827} ${100 * 2.827}`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="progress-text" style={{ color: getCompletionColor(completion) }}>
                {completion}%
              </div>
              <div className="progress-label">Completed</div>
            </div>
            
            <div className="profile-checklist">
              <div className={`checklist-item ${profileData.fullName ? 'completed' : ''}`}>
                {profileData.fullName && <span className="checkmark">✓</span>}
                <span>Full Name</span>
              </div>
              <div className={`checklist-item ${profileData.email ? 'completed' : ''}`}>
                {profileData.email && <span className="checkmark">✓</span>}
                <span>Email</span>
              </div>
              <div className={`checklist-item ${profileData.phone ? 'completed' : ''}`}>
                {profileData.phone && <span className="checkmark">✓</span>}
                <span>Phone</span>
              </div>
              <div className={`checklist-item ${profileData.location ? 'completed' : ''}`}>
                {profileData.location && <span className="checkmark">✓</span>}
                <span>Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default ProfileSettings;

