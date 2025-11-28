import { useNavigate, useParams } from 'react-router-dom';
import './LawyerProfile.css';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  location: string;
  imageUrl: string;
  casesWon: number;
  hourlyRate: number;
  about?: string;
  specializations?: string[];
}

const LawyerProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // In a real app, this would fetch from an API based on the id
  // For now, using dummy data
  const lawyer: Lawyer = {
    id: parseInt(id || '1'),
    name: 'Lusy Salvator',
    specialization: 'Corporate Law',
    experience: 5,
    rating: 4.0,
    location: 'Chennai, India',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    casesWon: 145,
    hourlyRate: 1500,
    about: 'Lusy Salvator is a dedicated legal professional with over 5 years of experience in corporate and intellectual property law. Known for her strategic approach and client-focused solutions.',
    specializations: ['Corporate Law', 'Property Law', 'Family Law', 'Criminal Law']
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star filled">★</span>);
    }
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    return stars;
  };

  const pricingOptions = [
    { duration: '1hr', price: lawyer.hourlyRate },
    { duration: '2hrs', price: lawyer.hourlyRate * 2 },
    { duration: '3hrs', price: lawyer.hourlyRate * 3 }
  ];

  return (
    <div className="lawyer-profile-container">
      {/* Back Button */}
      <button className="back-button-profile" onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        BACK
      </button>

      <div className="profile-content">
        {/* Left Column - Lawyer Info Card */}
        <div className="lawyer-info-card">
          <div className="lawyer-name-header">
            <h2>{lawyer.name.toUpperCase()}</h2>
          </div>

          <div className="lawyer-profile-image">
            <img 
              src={lawyer.imageUrl} 
              alt={lawyer.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/200/4338ca/ffffff?text=' + lawyer.name.split(' ').map(n => n[0]).join('');
              }}
            />
          </div>

          <div className="rating-section">
            {renderStars(lawyer.rating)}
          </div>

          <div className="experience-location-section">
            <p className="experience-text">{lawyer.experience}+ years of experience</p>
            <p className="location-text">{lawyer.location}</p>
          </div>

          <button className="book-consultation-btn" onClick={() => navigate(`/book-consultation/${lawyer.id}`)}>
            BOOK CONSULTATION
          </button>
        </div>

        {/* Right Column - Details */}
        <div className="lawyer-details-column">
          {/* About Section */}
          <div className="detail-section">
            <div className="section-header">
              <h3>ABOUT</h3>
            </div>
            <div className="section-content">
              <p>{lawyer.about}</p>
            </div>
          </div>

          {/* Specialization Section */}
          <div className="detail-section">
            <div className="section-header">
              <h3>SPECIALIZATION</h3>
            </div>
            <div className="section-content">
              <div className="specialization-grid">
                {lawyer.specializations?.map((spec, index) => (
                  <div key={index} className="specialization-badge">
                    {spec === 'Corporate Law' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                    )}
                    {spec === 'Property Law' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    )}
                    {spec === 'Family Law' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    )}
                    {spec === 'Criminal Law' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    )}
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="detail-section location-section">
            <div className="section-header">
              <h3>LOCATION</h3>
            </div>
            <div className="section-content location-map">
              <div className="map-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>Map View</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Information Card */}
        <div className="pricing-info-card">
          <div className="pricing-header">
            <h3>PRICING INFORMATION</h3>
          </div>

          <div className="pricing-icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
          </div>

          <p className="pricing-starts">Starts from {lawyer.hourlyRate}/hr</p>

          <div className="pricing-options">
            {pricingOptions.map((option, index) => (
              <div key={index} className="pricing-option">
                ₹ {option.price}/{option.duration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
