import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import FeedbackDialog from '../components/FeedbackDialog';
import "../styles/customerDashboard.css";

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

const customerDashboard: React.FC = () => {
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">LawYou</div>
        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>My Cases</li>
          <li>Appointments</li>
          <li>Documents</li>
          <li>Legal Resources</li>
          <li>Find Lawyers</li>
          <li>Support</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        {/* Top bar */}
        <header className="topbar">
          <nav className="top-links">
            <a href="#">Messages</a>
            <a href="#">Calendar</a>
            <a href="#">Settings</a>
          </nav>
          <div className="top-user">
            <span className="welcome-btn">Welcome John</span>
            <div className="user-avatar"></div>
          </div>
        </header>

        {/* Main sections */}
        <section className="content">
          <h2 className="page-title">Client Dashboard</h2>
          <p className="subtitle">
            Manage your legal cases, track progress, and stay connected with your legal team.
          </p>

          <div className="grid">
            {/* Active Cases */}
            <div className="card span-2">
              <h3>Active Cases</h3>
              <div className="cases">
                <div className="case-box">
                  <h4>Property Dispute</h4>
                  <p>Boundary dispute resolution case</p>
                  <div className="case-user">
                    <div className="avatar"></div>
                    <span>Sarah Mitchell, Esq.</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress"></div>
                  </div>
                </div>
                <div className="case-box">
                  <h4>Contract Review</h4>
                  <p>Employment contract analysis</p>
                  <span className="tag">High Priority</span>
                  <div className="progress-bar">
                    <div className="progress"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming meetings */}
            <div className="card">
              <h3>Upcoming Appointments</h3>
              <div className="meeting">
                <p>Case Review Meeting</p>
                <p className="small">Tomorrow, 2:00 PM - 3:00 PM</p>
                <span>$250.00</span>
              </div>
            </div>

            {/* Legal Team */}
            <div className="card">
              <h3>Your Legal Team</h3>
              <ul className="meeting-list">
                <li>
                  <div className="avatar"></div> Sarah Mitchell
                </li>
                <li>
                  <div className="avatar"></div> David Rodriguez
                </li>
                <li>
                  <div className="avatar"></div> Emily Johnson
                </li>
                <li>
                  <div className="avatar"></div> Michael Thompson
                </li>
              </ul>
            </div>

            {/* Support & Feedback */}
            <div className="card">
              <h3>Support & Feedback</h3>
              <p>Need help or have questions? Our support team is here to assist you.</p>
              <button className="btn">Contact Support</button>
            </div>

            {/* Legal News */}
            <div className="card">
              <h3>Legal News</h3>
              <p>Stay updated with the latest legal developments and news.</p>
            </div>

            {/* Resource Section */}
            <div className="card">
              <h3>Resource Center</h3>
              <p>
                Access legal guides, templates, and educational materials to help you understand your case better.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer Details Section */}
      <FooterDetails onFeedbackClick={() => setShowFeedbackDialog(true)} />
      
      {/* Feedback Dialog */}
      {showFeedbackDialog && (
        <FeedbackDialog onClose={() => setShowFeedbackDialog(false)} />
      )}
    </div>
  );
};

export default customerDashboard;
