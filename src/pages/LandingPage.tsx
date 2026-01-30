import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
// import landingPageBackground from '../assets/landingPagebackground.png';
import barCertifiedIcon from '../assets/barCertified.png';
import securedDocsIcon from '../assets/securedDocs.png';
import transparentFeesIcon from '../assets/transsparentFees.png';
import supportIcon from '../assets/support.png';
import maleLawyer1 from '../assets/maleLawyer1.jpg';
import maleLawyer2 from '../assets/maleLawyer2.jpg';
import womenLawyer from '../assets/womenLawyer.jpg';
import menLawyer3 from '../assets/menLawyer3.jpg';
import womenLawyer3 from '../assets/womenLawyer3.jpg';
import womenlawyer2 from '../assets/womenlawyer2.jpg';
import theme from '../constants/theme';
import Footer from '../components/Footer';
import JoinUsDialog from '../components/JoinUsDialog';
import { useState } from 'react';

const buttonBlue = theme.colors.primary;

const LandingPage = () => {
  const navigate = useNavigate();
  const [showPartnerDialog, setShowPartnerDialog] = useState(false);
  
  return (
  <div
    style={{
        fontFamily: 'Inter, Arial, sans-serif',
        background: theme.colors.background,
      minHeight: '100vh',
      padding: 0,
      margin: 0,
      width: '100%',
      overflowX: 'hidden',
      boxSizing: 'border-box',
        color: theme.colors.textPrimary,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
      <main style={{ width: '100%', padding: 0, margin: 0, overflowX: 'hidden', boxSizing: 'border-box', flex: 1 }}>
      {/* Hero Section */}
      <section
        style={{
            maxWidth: '1400px',
          margin: '0 auto',
            padding: '4rem 1rem 0rem 1rem',
          display: 'flex',
            flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 700,
              color: theme.colors.textPrimary,
              lineHeight: 1.2,
              marginBottom: '0.5rem',
              textAlign: 'center',
              width: '100%',
              padding: '0 1rem',
              boxSizing: 'border-box',
        }}
      >
            Legal clarity,
          </h1>

          <h1
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 700,
              color: theme.colors.textPrimary,
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              textAlign: 'center',
              width: '100%',
              padding: '0 1rem',
              boxSizing: 'border-box',
            }}
          >
            one click away.
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '1.25rem',
              color: theme.colors.textSecondary,
              marginBottom: '3rem',
              lineHeight: 1.6,
              textAlign: 'center',
              maxWidth: '700px',
            }}
          >
            Trusted lawyers. Transparent guidance. Seamless experience.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
            <Button
              onClick={() => navigate('/findLawyer')}
              variant="contained"
              sx={{
                padding: '0.875rem 2rem',
                background: buttonBlue,
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'uppercase',
                transition: 'background-color 0.2s',
                width: { xs: '100%', sm: '400px', md: '500px', lg: '600px' },
                maxWidth: '600px',
                marginBottom: '2rem',
                '&:hover': {
                  backgroundColor: theme.colors.primaryDark,
                },
              }}
            >
              FIND A LAWYER
            </Button>
          </div>

          {/* Scales of Justice Image - Commented Out */}
          {/* <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '6rem',
            }}
          >
            <img
              src={landingPageBackground}
              alt="Scales of Justice"
          style={{
                maxWidth: '800px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
          }}
        />
          </div> */}

          {/* Know About Your Lawyer Section */}
          <section
          style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto 6rem auto',
              padding: '0 1rem',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                textAlign: 'center',
                marginBottom: '3rem',
                fontFamily: 'Inter, Arial, sans-serif',
              }}
            >
              KNOW ABOUT YOUR LAWYER
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: { xs: '2rem', lg: '1.25rem' },
                marginBottom: '3rem',
              }}
            >
              {/* Criminal Lawyer Card */}
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  padding: 0,
                  borderRadius: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  overflow: 'hidden',
                  width: '100%',
                  minWidth: 0,
                  boxSizing: 'border-box',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={maleLawyer1}
                  alt="Criminal Lawyer"
                  sx={{
                    width: { xs: 180, md: 150, lg: 100 },
                    height: '100%',
                    minHeight: { xs: '150px', lg: '120px' },
                    objectFit: 'cover',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                  }}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  padding: { xs: '2rem', lg: '1.25rem' },
                  minWidth: 0,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.125rem' },
                      fontWeight: 700,
                      color: theme.colors.textPrimary,
                      marginBottom: '0.75rem',
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Criminal Lawyer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      color: theme.colors.textSecondary,
                      lineHeight: 1.6,
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Handles criminal defense cases, bail matters, and court representation
                  </Typography>
                </CardContent>
              </Card>

              {/* Family Lawyer Card */}
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  padding: 0,
                  borderRadius: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  overflow: 'hidden',
                  width: '100%',
                  minWidth: 0,
                  boxSizing: 'border-box',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={maleLawyer2}
                  alt="Family Lawyer"
                  sx={{
                    width: { xs: 180, md: 150, lg: 100 },
                    height: '100%',
                    minHeight: { xs: '150px', lg: '120px' },
                    objectFit: 'cover',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                  }}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  padding: { xs: '2rem', lg: '1.25rem' },
                  minWidth: 0,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.125rem' },
                      fontWeight: 700,
                      color: theme.colors.textPrimary,
                      marginBottom: '0.75rem',
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Family Lawyer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      color: theme.colors.textSecondary,
                      lineHeight: 1.6,
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Provides legal support for divorce, child custody, and family disputes
                  </Typography>
                </CardContent>
              </Card>

              {/* Corporate Lawyer Card */}
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  padding: 0,
                  borderRadius: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  overflow: 'hidden',
                  width: '100%',
                  minWidth: 0,
                  boxSizing: 'border-box',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={womenLawyer}
                  alt="Corporate Lawyer"
                  sx={{
                    width: { xs: 180, md: 150, lg: 100 },
                    height: '100%',
                    minHeight: { xs: '150px', lg: '120px' },
                    objectFit: 'cover',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                  }}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  padding: { xs: '2rem', lg: '1.25rem' },
                  minWidth: 0,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.125rem' },
                      fontWeight: 700,
                      color: theme.colors.textPrimary,
                      marginBottom: '0.75rem',
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Corporate Lawyer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      color: theme.colors.textSecondary,
                      lineHeight: 1.6,
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Assists businesses with contracts, compliance, and corporate legal matters
                  </Typography>
                </CardContent>
              </Card>

              {/* Immigration Lawyer Card */}
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  padding: 0,
                  borderRadius: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  overflow: 'hidden',
                  width: '100%',
                  minWidth: 0,
                  boxSizing: 'border-box',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={menLawyer3}
                  alt="Immigration Lawyer"
                  sx={{
                    width: { xs: 180, md: 150, lg: 100 },
                    height: '100%',
                    minHeight: { xs: '150px', lg: '120px' },
                    objectFit: 'cover',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                  }}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  padding: { xs: '2rem', lg: '1.25rem' },
                  minWidth: 0,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.125rem' },
                      fontWeight: 700,
                      color: theme.colors.textPrimary,
                      marginBottom: '0.75rem',
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Immigration Lawyer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      color: theme.colors.textSecondary,
                      lineHeight: 1.6,
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Helps with visas, green cards, citizenship, and immigration documentation
                  </Typography>
                </CardContent>
              </Card>

              {/* Real Estate Lawyer Card */}
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  padding: 0,
                  borderRadius: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  overflow: 'hidden',
                  width: '100%',
                  minWidth: 0,
                  boxSizing: 'border-box',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={womenLawyer3}
                  alt="Real Estate Lawyer"
                  sx={{
                    width: { xs: 180, md: 150, lg: 100 },
                    height: '100%',
                    minHeight: { xs: '150px', lg: '120px' },
                    objectFit: 'cover',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                  }}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  padding: { xs: '2rem', lg: '1.25rem' },
                  minWidth: 0,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.125rem' },
                      fontWeight: 700,
                      color: theme.colors.textPrimary,
                      marginBottom: '0.75rem',
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Real Estate Lawyer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      color: theme.colors.textSecondary,
                      lineHeight: 1.6,
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Handles property transactions, leases, and real estate disputes
                  </Typography>
                </CardContent>
              </Card>

              {/* Intellectual Property Lawyer Card */}
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  padding: 0,
                  borderRadius: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  overflow: 'hidden',
                  width: '100%',
                  minWidth: 0,
                  boxSizing: 'border-box',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={womenlawyer2}
                  alt="Intellectual Property Lawyer"
                  sx={{
                    width: { xs: 180, md: 150, lg: 100 },
                    height: '100%',
                    minHeight: { xs: '150px', lg: '120px' },
                    objectFit: 'cover',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                  }}
                />
                <CardContent sx={{ 
                  flex: 1, 
                  padding: { xs: '2rem', lg: '1.25rem' },
                  minWidth: 0,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.125rem' },
                      fontWeight: 700,
                      color: theme.colors.textPrimary,
                      marginBottom: '0.75rem',
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Intellectual Property Lawyer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1rem',
                      color: theme.colors.textSecondary,
                      lineHeight: 1.6,
                      fontFamily: 'Inter, Arial, sans-serif',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      hyphens: 'auto',
                    }}
                  >
                    Protects patents, trademarks, copyrights, and trade secrets
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Browse All Lawyers Button */}
            {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={() => navigate('/findLawyer')}
                style={{
                  padding: '0.875rem 2.5rem',
                  background: buttonBlue,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, Arial, sans-serif',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  transition: 'background-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.primaryDark;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = buttonBlue;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                BROWSE ALL LAWYERS
              </button>
            </Box> */}
          </section>

          {/* LAWTALK HUB, Resources, Partner With Us, Agreements Section */}
          <section
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto 6rem auto',
              padding: '0 1rem',
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                gap: '2.5rem',
                alignItems: 'stretch',
              }}
            >
              {/* LAWTALK HUB */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    fontWeight: 700,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.75rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  LawTalk Hub
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: theme.colors.textSecondary,
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flex: 1,
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  Law, beyond textbooks and courtrooms.
                </Typography>
                <Button
                  onClick={() => navigate('/lawtalk-hub')}
                  variant="contained"
                  sx={{
                    padding: '0.875rem 2rem',
                    background: buttonBlue,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.2s',
                    width: '100%',
                    maxWidth: '280px',
                    '&:hover': {
                      backgroundColor: theme.colors.primaryDark,
                    },
                  }}
                >
                  LAWTALK HUB
                </Button>
              </Box>

              {/* Resource Section */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    fontWeight: 700,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.75rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  Resource Section
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: theme.colors.textSecondary,
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flex: 1,
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  Study. Refer. Research.
                </Typography>
                <Button
                  onClick={() => navigate('/legal-learning')}
                  variant="contained"
                  sx={{
                    padding: '0.875rem 2rem',
                    background: buttonBlue,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.2s',
                    width: '100%',
                    maxWidth: '280px',
                    '&:hover': {
                      backgroundColor: theme.colors.primaryDark,
                    },
                  }}
                >
                  RESOURCES
                </Button>
              </Box>

              {/* Partner With Us */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    fontWeight: 700,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.75rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  Partner With Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: theme.colors.textSecondary,
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flex: 1,
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  Promote university events, firm initiatives, internships, and more.
                </Typography>
                <Button
                  onClick={() => setShowPartnerDialog(true)}
                  variant="contained"
                  sx={{
                    padding: '0.875rem 2rem',
                    background: buttonBlue,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.2s',
                    width: '100%',
                    maxWidth: '280px',
                    '&:hover': {
                      backgroundColor: theme.colors.primaryDark,
                    },
                  }}
                >
                  JOIN NOW
                </Button>
              </Box>

              {/* Agreements */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  borderRadius: '1rem',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem' },
                    fontWeight: 700,
                    color: theme.colors.textPrimary,
                    marginBottom: '0.75rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  Agreements
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: theme.colors.textSecondary,
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flex: 1,
                    fontFamily: 'Inter, Arial, sans-serif',
                  }}
                >
                  Access ready-made, lawyer-verified contracts in just a click.
                </Typography>
                <Button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openAgreementsDropdown'));
                  }}
                  variant="contained"
                  sx={{
                    padding: '0.875rem 2rem',
                    background: buttonBlue,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.2s',
                    width: '100%',
                    maxWidth: '280px',
                    '&:hover': {
                      backgroundColor: theme.colors.primaryDark,
                    },
                  }}
                >
                  AGREEMENTS
                </Button>
              </Box>
            </Box>
          </section>

        
      </section>
                {/* Footer Section with Icons - Full Width Grey Background */}
                <section
            style={{
              width: '100%',
              backgroundColor: theme.colors.backgroundDark || '#F5F5F5',
              padding: '1rem 0',
              marginTop: '0',
            }}
          >
            <div
              style={{
                maxWidth: '100%',
                margin: '0 auto',
                padding: '0',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                {/* Bar Certified */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={barCertifiedIcon}
                      alt="Bar Certified"
                      style={{
                        width: '45px',
                        height: '45px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                fontWeight: 600,
                      color: '#000000',
              }}
            >
              Bar Certified
            </div>
            </div>

                {/* Secure Docs */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={securedDocsIcon}
                      alt="Secure Docs"
                      style={{
                        width: '45px',
                        height: '45px',
                        objectFit: 'contain',
                      }}
                    />
          </div>
            <div
              style={{
                      fontSize: '0.875rem',
                fontWeight: 600,
                      color: '#000000',
              }}
            >
              Secure Docs
            </div>
            </div>

                {/* Transparent Fees */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={transparentFeesIcon}
                      alt="Transparent Fees"
                      style={{
                        width: '45px',
                        height: '45px',
                        objectFit: 'contain',
                      }}
                    />
          </div>
            <div
              style={{
                      fontSize: '0.875rem',
                fontWeight: 600,
                      color: '#000000',
              }}
            >
              Transparent Fees
            </div>
            </div>

                {/* 24/7 Support */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={supportIcon}
                      alt="24/7 Support"
                      style={{
                        width: '45px',
                        height: '45px',
                        objectFit: 'contain',
                      }}
                    />
          </div>
            <div
              style={{
                      fontSize: '0.875rem',
                fontWeight: 600,
                      color: '#000000',
              }}
            >
              24/7 Support
            </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    
    {/* Footer Section */}
    <div >
      <Footer />
    </div>

    {/* Partner With Us Dialog (from landing page) */}
    {showPartnerDialog && (
      <JoinUsDialog
        variant="partner"
        onClose={() => setShowPartnerDialog(false)}
      />
    )}
  </div>
  );
};

export default LandingPage;
