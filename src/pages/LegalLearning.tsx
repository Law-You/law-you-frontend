import React from 'react';
import { useNavigate } from 'react-router-dom';
import { School, People } from '@mui/icons-material';
import learnAnytimeIcon from '../assets/learnAnytime.png';
import trackProgressIcon from '../assets/trackProgress.png';
import connectWithIcon from '../assets/connectWith.png';
import legalLearningImage from '../assets/legallearning.png';
import lawyerDashboardImage from './lawyerDashboard.png';
import './LegalLearning.css';

const LegalLearning: React.FC = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      image: lawyerDashboardImage,
      category: 'Growth',
      date: 'Feb 15 2024',
      title: 'Navigating the complexities of corporate Law: Key Insights'
    },
    {
      id: 2,
      image: lawyerDashboardImage,
      category: 'Growth',
      date: 'Feb 15 2024',
      title: 'Ethical Dilemmas in criminal Justice: A Deep Dive'
    },
    {
      id: 3,
      image: lawyerDashboardImage,
      category: 'Growth',
      date: 'Feb 15 2024',
      title: 'The Future of Environmental Law: Trends and Predictions'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: 'This platform made law actually make sense. The lessons are clear, practical, and way more engaging than anything I\'ve used before.',
      author: 'Aarav M.',
      designation: 'Law Student'
    },
    {
      id: 2,
      quote: 'I cracked my internships using what I learned here. The guidance is real, the resources are legit, and everything feels designed for how students actually learn.',
      author: 'Sara K.',
      designation: 'Law Graduate'
    },
    {
      id: 3,
      quote: 'The case explanations and writing tips boosted my confidence instantly. I improved my legal writing faster here than in any class.',
      author: 'Rohit S.',
      designation: 'Legal Intern'
    }
  ];

  return (
    <div className="legal-learning-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title-small">Legal Learning</h2>
            <h1 className="hero-title-large">Unlock your Legal Potential with us</h1>
            <p className="hero-description">
              Learning law doesn't have to feel heavy. We break it down in a clean, simple, and modern way giving you the tools, clarity, and support you need to level up your legal journey without the stress.
            </p>
            <button className="get-started-button" onClick={() => navigate('/signUp')}>
              Get Started
            </button>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src={legalLearningImage} alt="Legal Learning" className="hero-circle-image" />
              <div className="image-overlay-top">
                <School className="overlay-icon" />
                <div className="overlay-text">
                  <div className="overlay-number">50+</div>
                  <div className="overlay-label">Tutors</div>
                </div>
              </div>
              <div className="image-overlay-bottom">
                <People className="overlay-icon" />
                <div className="overlay-text">
                  <div className="overlay-number">2k</div>
                  <div className="overlay-label">Sources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <img src={learnAnytimeIcon} alt="Learn Anytime" className="feature-icon" />
            <h3 className="feature-title">Learn Anytime</h3>
            <p className="feature-description">
              Access lectures anytime, anywhere. Learn at your pace, effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <img src={trackProgressIcon} alt="Track Progress" className="feature-icon" />
            <h3 className="feature-title">Track Progress</h3>
            <p className="feature-description">
              Track your progress, identify strength, and optimize your learning journey
            </p>
          </div>
          <div className="feature-card">
            <img src={connectWithIcon} alt="Stay Updated" className="feature-icon" />
            <h3 className="feature-title">Stay Updated</h3>
            <p className="feature-description">
              Stay informed with real-time legal updates and expert analysis
            </p>
          </div>
        </div>
      </section>

      {/* Legal Insights Section */}
      <section className="insights-section">
        <div className="insights-container">
          <h2 className="insights-title">Legal Insights Awaits You</h2>
          <p className="insights-description">
            Explore our blog for the latest legal insights analysis and expert opinions to stay informed and ahead
          </p>
          <div className="blog-cards">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Students say</h2>
          <div className="testimonial-cards">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <span className="author-name">-{testimonial.author}</span>
                  <span className="author-designation">, {testimonial.designation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="learning-footer">
        <div className="footer-container">
          <p className="footer-text">
            This corner is exclusively for students and teachers your go-to place for clean notes, smart resources, and everything you need to level up your legal learning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalLearning;

