import { useNavigate } from 'react-router-dom';
import customerDashboardImage from './customerDashboard.png';
import resourceSectionImage from './resourceSection.png';
import lawyerDashboardImage from './lawyerDashboard.png';
import legalServicesImage from './legalServices.png';
import './exploreServices.css';

const ExploreServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'customer-dashboard',
      title: 'Customer Dashboard',
      description: 'Manage your cases, track progress, and communicate with your legal team through our intuitive dashboard.',
      image: customerDashboardImage,
      imagePosition: 'left',
      path: '/customerDashboard'
    },
    {
      id: 'resource-section',
      title: 'Resource Section',
      description: 'Explore our comprehensive library of legal resources, guides, and educational materials.',
      image: resourceSectionImage,
      imagePosition: 'right',
      path: '/legal-learning'
    },
    {
      id: 'lawyer-dashboard',
      title: 'Lawyer Dashboard',
      description: 'Browse top-rated lawyers based on client reviews, success rates, and areas of expertise.',
      image: lawyerDashboardImage,
      imagePosition: 'left',
      path: '/findLawyer'
    },
    {
      id: 'legal-services',
      title: 'Legal Services',
      description: 'Access a wide range of legal services including consultation, documentation, and representation.',
      image: legalServicesImage,
      imagePosition: 'right',
      path: '/exploreServices'
    }
  ];

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="explore-services-container">
      {/* Main Title */}
      <div className="services-title-section">
        <h1 className="services-title">Explore Our Services</h1>
      </div>

      {/* Services Section */}
      <div className="services-section">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${service.imagePosition === 'left' ? 'image-left' : 'image-right'}`}
            onClick={() => handleServiceClick(service.path)}
          >
            {service.imagePosition === 'left' && (
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
            )}
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
            {service.imagePosition === 'right' && (
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;
