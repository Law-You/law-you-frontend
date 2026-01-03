import React from 'react';
import { Schedule, CalendarToday, Mail, Star } from '@mui/icons-material';
import './lawyerDashboard.css';

const LawyerDashboard: React.FC = () => {
  return (
    <div className="lawyer-dashboard">
      {/* Title Section */}
      <div className="dashboard-title-section">
        <h1 className="dashboard-title">Lawyer Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back. Here is your overview.</p>
      </div>

      {/* Top Row Widgets */}
      <div className="dashboard-widgets-top">
        {/* Pending Bookings */}
        <div className="widget-card blue-card">
          <Schedule className="widget-icon" />
          <h3 className="widget-title">PENDING BOOKINGS</h3>
          <div className="widget-main-value">12</div>
          <div className="widget-detail red-text">SRK, Katseye..10+</div>
        </div>

        {/* Today's Schedule */}
        <div className="widget-card black-card">
          <CalendarToday className="widget-icon" />
          <h3 className="widget-title">TODAY'S SCHEDULE</h3>
          <div className="schedule-list">
            <div className="schedule-item">10:00 AM - Chandler Bing</div>
            <div className="schedule-item">14:00 PM - Sheldone Lee Cooper</div>
          </div>
        </div>

        {/* Unread Messages */}
        <div className="widget-card blue-card">
          <Mail className="widget-icon" />
          <h3 className="widget-title">UNREAD MESSAGES</h3>
          <div className="widget-main-value red-text">5</div>
          <div className="widget-detail">Last receive 10m ago</div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="dashboard-widgets-bottom">
        {/* Active Cases Directory */}
        <div className="cases-directory-card">
          <h2 className="directory-title">Active cases Directory</h2>
          <table className="cases-table">
            <thead>
              <tr>
                <th>CLIENT</th>
                <th>CASE TYPE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="client-cell">
                    <div className="client-avatar">RM</div>
                    <span>Rahul Malhothra</span>
                  </div>
                </td>
                <td>Civil Litigation</td>
                <td><span className="status-badge discovery">Discovery</span></td>
                <td><span className="action-link">Manage</span></td>
              </tr>
              <tr>
                <td>
                  <div className="client-cell">
                    <div className="client-avatar">B</div>
                    <span>Bipasha</span>
                  </div>
                </td>
                <td>Family Law</td>
                <td><span className="status-badge settled">Settled</span></td>
                <td><span className="action-link">Manage</span></td>
              </tr>
              <tr>
                <td>
                  <div className="client-cell">
                    <div className="client-avatar">S</div>
                    <span>Samuel</span>
                  </div>
                </td>
                <td>IP Dispute</td>
                <td><span className="status-badge filed">Filed</span></td>
                <td><span className="action-link">Manage</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recent Review */}
        <div className="review-card">
          <h3 className="review-title">Recent Review</h3>
          <div className="review-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="star-icon" />
            ))}
          </div>
          <p className="review-text">
            JAY is absolutely amazing when it comes to talking here. The LAW YOU platform made sharing evidence seamless
          </p>
          <div className="review-author">-Damon Salvatore., Yesterday</div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;

