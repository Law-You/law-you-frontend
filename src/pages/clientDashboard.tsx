import React, { useState } from 'react';
import { CalendarToday, Folder, Message } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import FeedbackDialog from '../components/FeedbackDialog';
import './clientDashboard.css';

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

const ClientDashboard: React.FC = () => {
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  
  return (
    <div className="client-dashboard">
      {/* Title Section */}
      <div className="dashboard-title-section">
        <h1 className="dashboard-title">Client Profile</h1>
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
      
      {/* Footer Details Section */}
      <FooterDetails onFeedbackClick={() => setShowFeedbackDialog(true)} />
      
      {/* Feedback Dialog */}
      {showFeedbackDialog && (
        <FeedbackDialog onClose={() => setShowFeedbackDialog(false)} />
      )}
    </div>
  );
};

export default ClientDashboard;

