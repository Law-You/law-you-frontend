import { useNavigate } from 'react-router-dom';
import './LawyerCard.css';

interface LawyerCardProps {
  lawyer: {
    id: number;
    name: string;
    specialization: string | string[];
    experience: number;
    rating: number;
    location: string;
    imageUrl: string;
    casesWon: number;
    hourlyRate: number;
  };
}

const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star filled">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star filled">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    return stars;
  };

  return (
    <div className="lawyer-card-flip">
      <div className="lawyer-card-inner">
        {/* Front of card */}
        <div className="lawyer-card-front">
          <div className="lawyer-image-container">
            <img 
              src={lawyer.imageUrl} 
              alt={lawyer.name}
              className="lawyer-image"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x500/4338ca/ffffff?text=' + lawyer.name.split(' ').map(n => n[0]).join('');
              }}
            />
          </div>
          <div className="lawyer-name-badge">
            <h3>{lawyer.name.toUpperCase()}</h3>
          </div>
        </div>

        {/* Back of card */}
        <div className="lawyer-card-back">
          <div className="card-back-header">
            <h3>{lawyer.name.toUpperCase()}</h3>
          </div>
          
          <div className="card-back-content">
            <div className="lawyer-avatar">
              <img 
                src={lawyer.imageUrl} 
                alt={lawyer.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/120/4338ca/ffffff?text=' + lawyer.name.split(' ').map(n => n[0]).join('');
                }}
              />
            </div>

            <div className="rating-stars">
              {renderStars(lawyer.rating)}
            </div>

            <div className="experience-location">
              <p>{lawyer.experience}+ years of experience</p>
              <p>{lawyer.location}</p>
              <div className="specializations-container">
                <div className="specializations-badges">
                  {Array.isArray(lawyer.specialization) 
                    ? lawyer.specialization.map((spec, index) => (
                        <span key={index} className="specialization-badge-lawyer-card">
                          {spec}
                        </span>
                      ))
                    : (
                        <span className="specialization-badge-lawyer-card">
                          {lawyer.specialization}
                        </span>
                      )
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="card-actions">
            <button 
              className="btn-about" 
              onClick={() => navigate(`/lawyer/${lawyer.id}`)}
            >
              About
            </button>
            <button 
              className="btn-book" 
              onClick={() => navigate(`/book-consultation/${lawyer.id}`)}
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
