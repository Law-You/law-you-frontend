import { useNavigate } from 'react-router-dom';
import './exploreServices.css';

const ExploreServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'find-lawyer',
      title: 'FIND A LAWYER',
      iconType: 'lawyer',
      path: '/findLawyer',
      fullWidth: true
    },
    {
      id: 'customer-dashboard',
      title: 'CUSTOMER DASHBOARD',
      iconType: 'dashboard',
      path: '/customer-dashboard'
    },
    {
      id: 'legal-services',
      title: 'LEGAL SERVICES',
      iconType: 'legal',
      path: '/legal-services'
    },
    {
      id: 'resource-section',
      title: 'RESOURCE SECTION',
      iconType: 'resource',
      path: '/resource-section'
    },
    {
      id: 'lawyer-leaderboard',
      title: 'LAWYER LEADERBOARD',
      iconType: 'leaderboard',
      path: '/lawyer-leaderboard'
    }
  ];

  const renderIcon = (iconType: string, large = false) => {
    const size = large ? 60 : 40;
    
    switch (iconType) {
      case 'lawyer':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'dashboard':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'legal':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v18" />
            <path d="M5 12h14" />
            <path d="M5 12a7 7 0 0 1 7-7" />
            <path d="M19 12a7 7 0 0 1-7 7" />
            <path d="M9 21h6" />
          </svg>
        );
      case 'resource':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        );
      case 'leaderboard':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="explore-services-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            YOUR GATEWAY TO<br />
            PROFESSIONAL LEGAL<br />
            ASSISTANCE.
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section">
        {/* Find a Lawyer - Full Width */}
        <div 
          className="service-card service-card-large"
          onClick={() => handleServiceClick(services[0].path)}
        >
          <div className="service-icon-large">
            <div className="icon-wrapper">{renderIcon(services[0].iconType, true)}</div>
          </div>
          <h2 className="service-title-large">{services[0].title}</h2>
          <div className="service-arrow">→</div>
        </div>

        {/* Grid of 4 Services */}
        <div className="services-grid">
          {services.slice(1).map((service) => (
            <div
              key={service.id}
              className="service-card service-card-small"
              onClick={() => handleServiceClick(service.path)}
            >
              <div className="service-icon">
                <div className="icon-wrapper-small">{renderIcon(service.iconType)}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-arrow-small">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;