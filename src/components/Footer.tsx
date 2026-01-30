import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FeedbackDialog from './FeedbackDialog';

const Footer: React.FC = () => {
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);

  return (
    <>
      <footer
        id="footer-details"
        style={{
          width: '100%',
          backgroundColor: '#000000',
          padding: '4rem 2rem 2rem 2rem',
          marginTop: 'auto',
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
                onClick={() => setShowFeedbackDialog(true)}
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
                E-Homes, Ground Floor,<br />
                ICL Home Town, Noombal,<br />
                Vellapanchavadi,<br />
                Chennai 600077
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

      {/* Feedback Dialog */}
      {showFeedbackDialog && (
        <FeedbackDialog onClose={() => setShowFeedbackDialog(false)} />
      )}
    </>
  );
};

export default Footer;
