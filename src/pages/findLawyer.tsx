import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LawyerCard from '../components/LawyerCard';
import './findLawyer.css';

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

  // Dummy lawyer data
  const lawyers: Lawyer[] = [
    {
      id: 1,
      name: 'Lusy Salvator',
      specialization: 'Criminal Law',
      experience: 12,
      rating: 4.8,
      location: 'New York',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      casesWon: 145,
      hourlyRate: 350
    },
    {
      id: 2,
      name: 'John Anderson',
      specialization: 'Corporate Law',
      experience: 15,
      rating: 4.9,
      location: 'Los Angeles',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      casesWon: 210,
      hourlyRate: 450
    },
    {
      id: 3,
      name: 'Sarah Mitchell',
      specialization: 'Family Law',
      experience: 8,
      rating: 4.7,
      location: 'Chicago',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      casesWon: 98,
      hourlyRate: 280
    },
    {
      id: 4,
      name: 'Michael Chen',
      specialization: 'Intellectual Property',
      experience: 10,
      rating: 4.6,
      location: 'San Francisco',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      casesWon: 132,
      hourlyRate: 400
    },
    {
      id: 5,
      name: 'Emily Rodriguez',
      specialization: 'Immigration Law',
      experience: 7,
      rating: 4.8,
      location: 'Miami',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      casesWon: 87,
      hourlyRate: 300
    },
    {
      id: 6,
      name: 'David Thompson',
      specialization: 'Real Estate Law',
      experience: 20,
      rating: 4.9,
      location: 'Boston',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      casesWon: 275,
      hourlyRate: 500
    },
    {
      id: 7,
      name: 'Jessica Williams',
      specialization: 'Employment Law',
      experience: 9,
      rating: 4.7,
      location: 'Seattle',
      imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
      casesWon: 115,
      hourlyRate: 320
    },
    {
      id: 8,
      name: 'Robert Martinez',
      specialization: 'Tax Law',
      experience: 14,
      rating: 4.8,
      location: 'Houston',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      casesWon: 189,
      hourlyRate: 420
    }
  ];

  // Filter lawyers based on search and filters
  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialization = filters.specialization === 'all' || 
                                 lawyer.specialization === filters.specialization;
    
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
    <div className="find-lawyer-container">
      {/* Header */}
      <div className="find-lawyer-header">
        <h1 className="page-title">OUR LAWYERS</h1>
      </div>

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
          <div className="filter-group">
            <label>Specialization</label>
            <select 
              value={filters.specialization}
              onChange={(e) => handleFilterChange('specialization', e.target.value)}
            >
              <option value="all">All Specializations</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Immigration Law">Immigration Law</option>
              <option value="Real Estate Law">Real Estate Law</option>
              <option value="Employment Law">Employment Law</option>
              <option value="Tax Law">Tax Law</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Experience</label>
            <select 
              value={filters.experience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
            >
              <option value="all">All Experience Levels</option>
              <option value="0-5">0-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="11-15">11-15 years</option>
              <option value="16+">16+ years</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Rating</label>
            <select 
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
            >
              <option value="all">All Ratings</option>
              <option value="4.5+">4.5+ Stars</option>
              <option value="4.7+">4.7+ Stars</option>
              <option value="4.9+">4.9+ Stars</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <select 
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Miami">Miami</option>
              <option value="Boston">Boston</option>
              <option value="Seattle">Seattle</option>
              <option value="Houston">Houston</option>
            </select>
          </div>

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
    </div>
  );
};

export default FindLawyer;