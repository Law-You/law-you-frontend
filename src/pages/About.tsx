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
      name: 'Abhay K Kavin',
      role: 'Founder & CEO',
      image: abhayImage,
      bio: `Abhay K Kavin is a law graduate and legal entrepreneur with a strong inclination towards legal innovation, compliance, and practical problem-solving. He is the Founder & CEO of LawYou, a legal-tech platform built with the vision of making legal assistance more accessible, transparent, and efficient for individuals, startups, and businesses.

Currently pursuing his legal education, Abhay has developed a solid foundation in legal research, drafting, corporate compliance, and procedural law through hands-on internships with advocates and legal professionals, including experience associated with the Madras High Court. His exposure spans live legal matters, documentation, evidence verification, and compliance-oriented legal work.

Alongside practice-oriented legal training, Abhay has demonstrated strong leadership and organisational skills. He has served as the Convenor of the Moot Court Committee at his institution, where he was responsible for academic coordination, event management, and mentoring students in advocacy and research skills. This role, combined with his entrepreneurial journey, has strengthened his abilities in communication, strategic planning, and team management.

His professional interests lie at the intersection of law, technology, human resources, compliance frameworks, and intellectual property rights. Through LawYou, he actively works on building systems that simplify legal processes, connect users with legal professionals, and promote legal awareness in a practical, user-friendly manner.`,
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
    },
    {
      name: 'Adithya Kumar N',
      role: 'Co-Founder',
      image: adityaImage,
      bio: `Adithya Kumar N is a finance professional currently pursuing his MBA at NMIMS Bangalore, with a strong focus on integrating core financial expertise with emerging technologies such as Generative AI. Following his B.Com graduation in 2024 from DG Vaishnav College, he has actively worked towards building a technology-driven approach to modern finance.

He is an active member of both the Placement Committee and HRiday (the HR Club) at NMIMS for the 2025–2026 term, reflecting his interest in talent development, organisational strategy, and people management. His academic foundation is supported by a 94% score in his XII CBSE examinations and a 7.7 CGPA during his undergraduate studies.

Adithya possesses strong technical proficiency in Microsoft Excel and Word, and holds specialised certifications in Google Data Analytics, Financial Markets, and Generative AI for Finance Analysts. His analytical mindset, combined with a curiosity for technological innovation, allows him to approach financial challenges with both precision and adaptability.

Beyond academics and professional pursuits, he is a former Inter-School Football Tournament winner and maintains active interests in music and sports, contributing to a well-rounded professional outlook.

As the Co-Founder of LawYou, Adithya plays a key role in shaping the platform's financial strategy, operational planning, and technology-driven growth initiatives. With a strong understanding of finance, analytics, and emerging technologies, he contributes to building sustainable business models, data-backed decision frameworks, and scalable systems that support LawYou's long-term vision.`,
      skills: [],
      contact: null
    },
    {
      name: 'Levin Harry',
      role: 'Angel Investor & Advisor',
      image: levinImage,
      bio: `Levin Harry is an MBA student specializing in Information Technology and Operations, with a strong foundation in business management and data-driven decision-making. He is currently pursuing his MBA at ICFAI Business School, where he combines academic rigor with practical exposure in operations management, analytics, and logistics.

He holds a Bachelor of Business Administration (General Studies) from Loyola College, where he developed a strong understanding of core business principles, critical thinking, and organizational dynamics. His professional experience as a Junior Logistics Executive at Cosmo Ltd provided him with hands-on exposure to supply chain operations, shipment coordination, inventory management, and cross-functional communication, ensuring timely dispatches and accurate documentation.

With a keen interest in business analytics and operational efficiency, Levin has hands-on experience in building Power BI dashboards, working extensively with Excel, and applying Python for analytical tasks. He enjoys transforming raw data into meaningful insights that support informed and strategic business decisions.

He continues to strengthen his professional skill set through certifications in Excel (Intermediate), Power BI, and Bloomberg Finance, and aspires to build a career at the intersection of technology, operations, and data analytics.

Levin Harry is associated with LawYou as an Angel Investor and Advisor, where he contributes strategic guidance, operational insight, and analytical perspective to support the platform's growth and decision-making.`,
      skills: [],
      contact: null
    }
  ];

  return (
    <div className="about-page">
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
            <p>
              LawYou is a comprehensive legal-tech platform designed to bring law, legal assistance, and legal knowledge onto a single accessible digital space. Our vision is to simplify how individuals, professionals, and students interact with the law—making it faster, clearer, and more approachable.
            </p>
            
            <p>
              For clients, LawYou enables instant access to qualified advocates. Users can connect with legal professionals within minutes for consultations across various areas of law, removing traditional barriers such as delays, uncertainty, and lack of access.
            </p>
            
            <p>
              For law students, LawYou serves as a knowledge hub by providing free access to bare acts and subject-wise notes for LL.B. courses. The platform supports academic growth by making essential legal resources readily available, structured, and easy to understand.
            </p>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: '1.375rem',
                fontWeight: 600,
                color: theme.colors.textPrimary,
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Beyond consultations and education, LawYou also offers:
            </Typography>
            
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Ready-made contracts and agreements</strong>, professionally drafted and verified by legal experts, available for direct download.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                An <strong>interactive legal discussion space</strong>, inspired by platforms like X and Reddit, where users can share legal opinions, discuss current legal developments, and engage in informed conversations on law, policy, and current affairs.
              </li>
            </ul>
            
            <p>
              LawYou is built with the belief that law should not be complex, inaccessible, or intimidating. We are continuously evolving—expanding our services, improving accessibility, and integrating technology to serve the legal ecosystem more effectively.
            </p>
            
            <p>
              As a growing platform, LawYou remains committed to innovation, inclusivity, and practicality, striving to become a one-stop destination for legal services, legal learning, and legal dialogue.
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
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                    {/* Image Section */}
                    <Box
                      sx={{
                        width: { xs: '100%', md: '33.333%' },
                        position: 'relative',
                        minHeight: { xs: '300px', md: '100%' },
                        padding: 0,
                      }}
                    >
                        <Box
                          sx={{
                            width: '100%',
                            height: '100%',
                            minHeight: { xs: '300px', md: '450px' },
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

                      {/* Content Section */}
                      <Box sx={{ width: { xs: '100%', md: '66.666%' }, padding: '2rem' }}>
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
    </div>
  );
};

export default About;
