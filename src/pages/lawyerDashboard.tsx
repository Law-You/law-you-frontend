import React, { useState } from 'react';
import { Schedule, CalendarToday, Mail, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import FeedbackDialog from '../components/FeedbackDialog';
import './lawyerDashboard.css';

// Footer Details Component
const FooterDetails = ({ onFeedbackClick }: { onFeedbackClick: () => void }) => {
  return (
    <footer
      id="footer-details"
      style={{
        width: '100%',
        backgroundColor: '#000000',
        padding: '4rem 2rem 2rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: '3rem',
            marginBottom: '2rem',
          }}
        >
          {/* Contact Us Section - Left */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                fontFamily: 'Inter, Arial, sans-serif',
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.875rem',
                  color: '#ffffff',
                  fontFamily: 'Inter, Arial, sans-serif',
                }}
              >
                <strong>Email:</strong> info@lawyou.org
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.875rem',
                  color: '#ffffff',
                  fontFamily: 'Inter, Arial, sans-serif',
                }}
              >
                <strong>Phone:</strong> +91 9080919053
              </Typography>
            </Box>
          </Box>

          {/* Feedback Section - Center */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                fontFamily: 'Inter, Arial, sans-serif',
              }}
            >
              We Value Your Opinion
            </Typography>
            <button
              onClick={onFeedbackClick}
              style={{
                background: 'linear-gradient(135deg, #146ADA 0%, #0E5AA8 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, Arial, sans-serif',
                boxShadow: '0 4px 12px rgba(20, 106, 218, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(20, 106, 218, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 106, 218, 0.3)';
              }}
            >
              Share Your Feedback
            </button>
          </Box>

          {/* Address Section - Right */}
          <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                fontFamily: 'Inter, Arial, sans-serif',
              }}
            >
              Address
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                color: '#ffffff',
                lineHeight: 1.8,
                fontFamily: 'Inter, Arial, sans-serif',
              }}
            >
              E-homes, ground floor,<br />
              icl home town, noombal,<br />
              vellapanchavadi,<br />
              chennai 600077
            </Typography>
          </Box>
        </Box>

        {/* Copyright Section */}
        <Box
          sx={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          >
            © {new Date().getFullYear()} LawYou. All rights reserved.
          </Typography>
        </Box>
      </div>
    </footer>
  );
};

const LawyerDashboard: React.FC = () => {
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  
  return (
    <div className="lawyer-dashboard">
      {/* Title Section */}
      <div className="dashboard-title-section">
        <h1 className="dashboard-title">Lawyer Profile</h1>
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
      
      {/* Footer Details Section */}
      <FooterDetails onFeedbackClick={() => setShowFeedbackDialog(true)} />
      
      {/* Feedback Dialog */}
      {showFeedbackDialog && (
        <FeedbackDialog onClose={() => setShowFeedbackDialog(false)} />
      )}
    </div>
  );
};

export default LawyerDashboard;

