import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';
import { theme } from '../constants/theme';
import banner1 from '../assets/lawYouBanner1.jpeg';
import banner2 from '../assets/lawYouBanner2.jpeg';
import banner4 from '../assets/lawYouBanner4.jpeg';
import banner6 from '../assets/lawYouBanner6.jpeg';
import banner7 from '../assets/lawYouBanner7.jpeg';
import abhayImage from '../assets/Abhay.jpg';
import adityaImage from '../assets/Aditya.JPG';
import levinImage from '../assets/levin.jpg';
import Footer from '../components/Footer';
import './About.css';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [banner1, banner2, banner4, banner6, banner7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: 'Adithya Kumar N',
      role: 'Co-Founder',
      image: adityaImage,
      bio: `Adithya Kumar N is a finance professional with a strong interest in building technology-driven, data-backed business systems. He is currently pursuing his MBA at NMIMS Bangalore, where his focus lies in finance, analytics, and the application of emerging technologies such as Generative AI to modern business decision-making.

With an academic foundation in commerce and finance, Adithya brings a structured and analytical perspective to LawYou's growth. His experience and training enable him to contribute meaningfully to financial planning, operational strategy, and the development of scalable, sustainable business models for the platform.

At LawYou, Adithya plays a key role in shaping financial strategy, supporting data-driven decision frameworks, and aligning technology with long-term operational efficiency. His approach ensures that the platform's legal vision is supported by sound financial discipline and execution-focused planning.`,
      quote: 'Sustainable innovation is built where strategy, data, and execution meet.',
      skills: [],
      contact: null
    },
    {
      name: 'Levin Harry',
      role: 'Angel Investor & Advisor',
      image: levinImage,
      bio: `Levin Harry supports LawYou with strategic, operational, and analytical insight.

With a background in business administration and an MBA specialization in Information Technology and Operations, Levin brings a systems-oriented approach to platform growth. His professional experience in logistics and operations has shaped his focus on efficiency, process clarity, and scalable execution.

He has hands-on expertise in business analytics, including Power BI, advanced Excel, and Python-based analysis, enabling data-driven decision-making across operations and strategy.

As an Angel Investor and Advisor, Levin contributes to building sustainable systems that support LawYou's long-term growth and operational stability.`,
      quote: 'A strong product survives on clarity. A strong system survives on data.',
      skills: [],
      contact: null
    },
    {
      name: 'Abhay K Kavin',
      role: 'Founder & CEO',
      image: abhayImage,
      bio: `Abhay K Kavin founded LawYou to address a recurring problem he encountered during his legal training: legal help exists, but access to it is often slow, unclear, and intimidating.

As a law graduate with hands-on exposure to legal research, drafting, compliance work, and live legal matters associated with the Madras High Court, Abhay developed a practical understanding of how fragmented legal processes can be for individuals, startups, and students. Rather than accepting this as a systemic flaw, he focused on building structured, technology-driven solutions to simplify legal access.

Through LawYou, Abhay works to make legal assistance clearer, faster, and more accessible without compromising ethical standards or professional accountability.`,
      quote: 'Law should protect people, not confuse them.',
      skills: [
        'Legal Research & Analysis',
        'Contract Drafting & Documentation',
        'Corporate & HR Compliance',
        'Intellectual Property Law (IPR)',
        'Legal Content & Knowledge Design',
        'Legal-Tech Product Development',
        'Team Leadership & Operations'
      ],
      contact: {
        phone: '9080919053',
        email: 'abhaykavin1@gmail.com'
      }
    }
  ];

  return (
    <div className="about-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Carousel */}
      <div className="about-carousel">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="carousel-overlay">
              <Container maxWidth="lg">
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    color: '#ffffff',
                    textAlign: 'center',
                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  About LawYou
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    color: '#ffffff',
                    textAlign: 'center',
                    marginTop: '1rem',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  Making Law Accessible, Transparent, and Efficient
                </Typography>
              </Container>
            </div>
          </div>
        ))}
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <Container maxWidth="lg" sx={{ padding: '4rem 2rem' }}>
        <Box sx={{ marginBottom: '4rem' }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: theme.colors.textPrimary,
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            About Us
          </Typography>
          
          <Box
            sx={{
              maxWidth: '900px',
              margin: '0 auto',
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: theme.colors.textPrimary,
              '& p': {
                marginBottom: '1.5rem',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginBottom: '1rem',
              }}
            >
              About LawYou:
            </Typography>
            <p>
              LawYou is a legal-tech platform built to simplify access to legal assistance, legal knowledge, and legal discussion within a single digital ecosystem.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Our Story:
            </Typography>
            <p>
              LawYou was born from a simple observation: legal help is available, but often inaccessible, delayed, or unclear. The platform was created to remove friction between people and the law through technology and structure.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Why LawYou Exists:
            </Typography>
            <p>
              Because legal processes should not feel intimidating or exclusive. LawYou exists to replace confusion with clarity and delays with timely access.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              What We Do:
            </Typography>
            <p>
              LawYou connects users with qualified legal professionals, provides structured legal learning resources, and enables practical legal solutions through technology.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Who We Serve:
            </Typography>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                Individuals seeking legal clarity
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                Startups and businesses needing efficient legal support
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                Law students looking for accessible academic resources
              </li>
            </ul>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Founders' Vision:
            </Typography>
            <p>
              To build a transparent, efficient, and accessible legal ecosystem where legal assistance and legal knowledge are designed for real-world use.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Our Approach:
            </Typography>
            <p>
              We combine legal expertise, technology, and data-driven systems to deliver solutions that are practical, reliable, and easy to navigate.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Why We're Different:
            </Typography>
            <p>
              LawYou integrates legal services, learning, and discussion into one platform, reducing fragmentation and making legal engagement simpler and faster.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Looking Ahead:
            </Typography>
            <p>
              LawYou continues to evolve with a focus on innovation, inclusivity, and scalable systems that strengthen access to justice and legal awareness.
            </p>
          </Box>
        </Box>

        {/* Team Section */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: theme.colors.textPrimary,
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            Our Team
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                sx={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ padding: '0px !important' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Image Section - Full Width on Top */}
                    <Box
                      sx={{
                        width: '100%',
                        position: 'relative',
                        minHeight: { xs: '300px', md: '400px' },
                        padding: 0,
                      }}
                    >
                        <Box
                          sx={{
                            width: '100%',
                            height: '100%',
                            minHeight: { xs: '300px', md: '400px' },
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                              display: 'block',
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                              padding: '2rem 1.5rem 1rem',
                            }}
                          >
                            <Typography
                              variant="h5"
                              sx={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '0.25rem',
                              }}
                            >
                              {member.name}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: theme.colors.primary,
                              }}
                            >
                              {member.role}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Content Section - Full Width Below Image */}
                      <Box sx={{ width: '100%', padding: '2rem' }}>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: '0.9375rem',
                              lineHeight: 1.8,
                              color: theme.colors.textPrimary,
                              marginBottom: '1.5rem',
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {member.bio}
                          </Typography>

                          {(member as any).quote && (
                            <Box sx={{ 
                              marginTop: '1.5rem', 
                              marginBottom: '1.5rem',
                              padding: '1.5rem',
                              background: theme.colors.backgroundDark,
                              borderRadius: '0.5rem',
                              borderLeft: `4px solid ${theme.colors.primary}`,
                            }}>
                              <Typography
                                sx={{
                                  fontSize: '1rem',
                                  fontStyle: 'italic',
                                  lineHeight: 1.6,
                                  color: theme.colors.textPrimary,
                                }}
                              >
                                "{(member as any).quote}"
                              </Typography>
                            </Box>
                          )}

                          {member.skills.length > 0 && (
                            <Box sx={{ marginBottom: '1.5rem' }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: '1.125rem',
                                  fontWeight: 700,
                                  color: theme.colors.textPrimary,
                                  marginBottom: '1rem',
                                }}
                              >
                                Skills & Areas of Focus
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {member.skills.map((skill, idx) => (
                                  <Box
                                    key={idx}
                                    sx={{
                                      padding: '0.5rem 1rem',
                                      background: theme.colors.backgroundDark,
                                      borderRadius: '50px',
                                      fontSize: '0.875rem',
                                      fontWeight: 600,
                                      color: theme.colors.textPrimary,
                                    }}
                                  >
                                    {skill}
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          )}

                          {member.contact && (
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: '1.125rem',
                                  fontWeight: 700,
                                  color: theme.colors.textPrimary,
                                  marginBottom: '1rem',
                                }}
                              >
                                Contact
                              </Typography>
                              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                  <Phone sx={{ color: theme.colors.primary }} />
                                  <Typography
                                    sx={{
                                      fontSize: '0.9375rem',
                                      color: theme.colors.textPrimary,
                                    }}
                                  >
                                    {member.contact.phone}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                  <Email sx={{ color: theme.colors.primary }} />
                                  <Typography
                                    sx={{
                                      fontSize: '0.9375rem',
                                      color: theme.colors.primary,
                                      textDecoration: 'none',
                                    }}
                                    component="a"
                                    href={`mailto:${member.contact.email}`}
                                  >
                                    {member.contact.email}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
            ))}
          </Box>
        </Box>
      </Container>
      
      {/* Footer Section */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', flexShrink: 0 }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
