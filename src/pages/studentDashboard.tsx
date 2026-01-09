import React from 'react';
import { MenuBook, PlayArrow } from '@mui/icons-material';
import './studentDashboard.css';

const StudentDashboard: React.FC = () => {
  return (
    <div className="student-dashboard">
      {/* Title Section */}
      <div className="dashboard-title-section">
        <h1 className="dashboard-title">Student Profile</h1>
        <p className="dashboard-subtitle">Welcome back. Here is your overview.</p>
      </div>

      {/* Content Section */}
      <div className="dashboard-content">
        {/* Course Progress Card */}
        <div className="course-progress-card">
          <div className="card-header">
            <MenuBook className="card-icon" />
            <span className="card-badge">In Progress</span>
          </div>
          <h2 className="course-title">Contract Law 101</h2>
          <p className="course-subtitle">Module 4: Breach of contract Remedies</p>
          
          <div className="progress-section">
            <div className="progress-info">
              <span className="progress-text">48% COMPLETED</span>
              <span className="time-text">2hrs left</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '48%' }}></div>
            </div>
          </div>

          <button className="resume-button">
            <span>Resume</span>
            <PlayArrow className="play-icon" />
          </button>
        </div>

        {/* Quick Notes Section */}
        <div className="quick-notes-section">
          <h2 className="notes-title">Quick Notes</h2>
          <div className="notes-list">
            <div className="note-item">
              <div className="note-text">MOD 3 - Criminal Law</div>
              <div className="note-text">Mens Rea definitions VS</div>
            </div>
            <div className="note-item">
              <div className="note-text">MOD 3 - Criminal Law</div>
              <div className="note-text">Mens Rea definitions VS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

