import React from 'react';
import { CalendarToday, Folder, Message } from '@mui/icons-material';
import './clientDashboard.css';

const ClientDashboard: React.FC = () => {
  return (
    <div className="client-dashboard">
      {/* Title Section */}
      <div className="dashboard-title-section">
        <h1 className="dashboard-title">Client Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back. Here is your overview.</p>
      </div>

      {/* Cards Section */}
      <div className="dashboard-cards">
          {/* Next Appointment Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <CalendarToday className="card-icon" />
              <span className="card-badge upcoming">UPCOMING</span>
            </div>
            <h3 className="card-title">NEXT APPOINTMENT</h3>
            <div className="card-content">
              <div className="card-main-text">Dec 24, 10:00 AM</div>
              <div className="card-sub-text">With Attorney Vijay Malaya</div>
            </div>
          </div>

          {/* Current Case Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <Folder className="card-icon" />
              <span className="card-badge active">Active</span>
            </div>
            <h3 className="card-title">CURRENT CASE</h3>
            <div className="card-content">
              <div className="card-main-text">Throne Vs. Apex Crop</div>
              <div className="card-sub-text">Civil Litigation - ID: #88291</div>
            </div>
          </div>

          {/* Messages Card */}
          <div className="dashboard-card">
            <div className="card-header">
              <Message className="card-icon" />
              <span className="card-badge new">2 New</span>
            </div>
            <h3 className="card-title">MESSAGES</h3>
            <div className="card-content">
              <div className="card-main-text">Lead Council</div>
              <div className="card-sub-text">"We have reviewed the evidence..."</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ClientDashboard;

