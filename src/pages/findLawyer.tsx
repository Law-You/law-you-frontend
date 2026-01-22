import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import LawyerCard from '../components/LawyerCard';
import Footer from '../components/Footer';
import './findLawyer.css';

interface Lawyer {
  id: number;
  name: string;
  specialization: string | string[];
  experience: number;
  rating: number;
  location: string;
  imageUrl: string;
  casesWon: number;
  hourlyRate: number;
}

const FindLawyer = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    specialization: 'all',
    experience: 'all',
    rating: 'all',
    location: 'all'
  });

  // Dummy lawyer data - using public folder paths for better performance
  const lawyers: Lawyer[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      specialization: ['Criminal Law', 'Traffic Law', 'DUI Defense'],
      experience: 12,
      rating: 4.8,
      location: 'Mumbai',
      imageUrl: '/lawyers/womenLawyer.jpg',
      casesWon: 145,
      hourlyRate: 350
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      specialization: ['Corporate Law', 'Business Law', 'Mergers & Acquisitions'],
      experience: 15,
      rating: 4.9,
      location: 'Delhi',
      imageUrl: '/lawyers/maleLawyer1.jpg',
      casesWon: 210,
      hourlyRate: 450
    },
    {
      id: 3,
      name: 'Anjali Patel',
      specialization: 'Family Law',
      experience: 8,
      rating: 4.7,
      location: 'Ahmedabad',
      imageUrl: '/lawyers/womenlawyer2.jpg',
      casesWon: 98,
      hourlyRate: 280
    },
    {
      id: 4,
      name: 'Vikram Singh',
      specialization: ['Intellectual Property', 'Patent Law', 'Trademark Law'],
      experience: 10,
      rating: 4.6,
      location: 'Bangalore',
      imageUrl: '/lawyers/menLawyer3.jpg',
      casesWon: 132,
      hourlyRate: 400
    },
    {
      id: 5,
      name: 'Meera Reddy',
      specialization: 'Immigration Law',
      experience: 7,
      rating: 4.8,
      location: 'Hyderabad',
      imageUrl: '/lawyers/womenLawyer3.jpg',
      casesWon: 87,
      hourlyRate: 300
    },
    {
      id: 6,
      name: 'Arjun Malhotra',
      specialization: ['Real Estate Law', 'Property Law', 'Landlord-Tenant Law'],
      experience: 20,
      rating: 4.9,
      location: 'Chennai',
      imageUrl: '/lawyers/maleLawyer2.jpg',
      casesWon: 275,
      hourlyRate: 500
    },
    {
      id: 7,
      name: 'Kavita Nair',
      specialization: ['Employment Law', 'Labor Law'],
      experience: 9,
      rating: 4.7,
      location: 'Pune',
      imageUrl: '/lawyers/womenLawyer.jpg',
      casesWon: 115,
      hourlyRate: 320
    },
    {
      id: 8,
      name: 'Rohit Desai',
      specialization: 'Tax Law',
      experience: 14,
      rating: 4.8,
      location: 'Kolkata',
      imageUrl: '/lawyers/maleLawyer1.jpg',
      casesWon: 189,
      hourlyRate: 420
    }
  ];

  // Filter lawyers based on search and filters
  const filteredLawyers = lawyers.filter(lawyer => {
    const specializations = Array.isArray(lawyer.specialization) 
      ? lawyer.specialization 
      : [lawyer.specialization];
    const specializationStr = specializations.join(' ').toLowerCase();
    
    const matchesSearch = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         specializationStr.includes(searchQuery.toLowerCase());
    
    const matchesSpecialization = filters.specialization === 'all' || 
                                 (Array.isArray(lawyer.specialization) 
                                   ? lawyer.specialization.includes(filters.specialization)
                                   : lawyer.specialization === filters.specialization);
    
    const matchesExperience = filters.experience === 'all' ||
                             (filters.experience === '0-5' && lawyer.experience <= 5) ||
                             (filters.experience === '6-10' && lawyer.experience >= 6 && lawyer.experience <= 10) ||
                             (filters.experience === '11-15' && lawyer.experience >= 11 && lawyer.experience <= 15) ||
                             (filters.experience === '16+' && lawyer.experience >= 16);
    
    const matchesRating = filters.rating === 'all' ||
                         (filters.rating === '4.5+' && lawyer.rating >= 4.5) ||
                         (filters.rating === '4.7+' && lawyer.rating >= 4.7) ||
                         (filters.rating === '4.9+' && lawyer.rating >= 4.9);
    
    const matchesLocation = filters.location === 'all' || 
                           lawyer.location === filters.location;
    
    return matchesSearch && matchesSpecialization && matchesExperience && matchesRating && matchesLocation;
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      specialization: 'all',
      experience: 'all',
      rating: 'all',
      location: 'all'
    });
    setSearchQuery('');
  };

  return (
    <div className="find-lawyer-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      {/* <div className="find-lawyer-header">
        <h1 className="page-title">OUR LAWYERS</h1>
      </div> */}

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          BACK
        </button>

        <div className="search-filter-controls">
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search by name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button 
            className="filter-toggle-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      <div className={`filter-panel ${showFilters ? 'show' : ''}`}>
          <FormControl className="filter-group" variant="outlined">
            <InputLabel id="specialization-label">Specialization</InputLabel>
            <Select
              labelId="specialization-label"
              id="specialization-select"
              value={filters.specialization}
              onChange={(e) => handleFilterChange('specialization', e.target.value)}
              label="Specialization"
            >
              <MenuItem value="all">All Specializations</MenuItem>
              <MenuItem value="Criminal Law">Criminal Law</MenuItem>
              <MenuItem value="Corporate Law">Corporate Law</MenuItem>
              <MenuItem value="Family Law">Family Law</MenuItem>
              <MenuItem value="Intellectual Property">Intellectual Property</MenuItem>
              <MenuItem value="Immigration Law">Immigration Law</MenuItem>
              <MenuItem value="Real Estate Law">Real Estate Law</MenuItem>
              <MenuItem value="Employment Law">Employment Law</MenuItem>
              <MenuItem value="Tax Law">Tax Law</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="filter-group" variant="outlined">
            <InputLabel id="experience-label">Experience</InputLabel>
            <Select
              labelId="experience-label"
              id="experience-select"
              value={filters.experience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
              label="Experience"
            >
              <MenuItem value="all">All Experience Levels</MenuItem>
              <MenuItem value="0-5">0-5 years</MenuItem>
              <MenuItem value="6-10">6-10 years</MenuItem>
              <MenuItem value="11-15">11-15 years</MenuItem>
              <MenuItem value="16+">16+ years</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="filter-group" variant="outlined">
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              id="rating-select"
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              label="Rating"
            >
              <MenuItem value="all">All Ratings</MenuItem>
              <MenuItem value="4.5+">4.5+ Stars</MenuItem>
              <MenuItem value="4.7+">4.7+ Stars</MenuItem>
              <MenuItem value="4.9+">4.9+ Stars</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="filter-group" variant="outlined">
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location-select"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              label="Location"
            >
              <MenuItem value="all">All Locations</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
            </Select>
          </FormControl>

          <button className="reset-filters-button" onClick={resetFilters}>
            Reset Filters
          </button>
      </div>

      {/* Results Count */}
      <div className="results-info">
        <p>Showing {filteredLawyers.length} lawyer{filteredLawyers.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Lawyers Grid */}
      <div className="lawyers-grid">
        {filteredLawyers.length > 0 ? (
          filteredLawyers.map(lawyer => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))
        ) : (
          <div className="no-results">
            <p>No lawyers found matching your criteria.</p>
            <button onClick={resetFilters}>Clear Filters</button>
          </div>
        )}
      </div>
      
      {/* Footer Section */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', flexShrink: 0 }}>
        <Footer />
      </div>
    </div>
  );
};

export default FindLawyer;