import React, { useState, useMemo } from "react";

const lawyers = [
  { name: "Priya Sharma", experience: 8, rating: 4.7 },
  { name: "Arjun Verma", experience: 12, rating: 4.9 },
  { name: "Meera Patel", experience: 6, rating: 4.2 },
  { name: "Rahul Singh", experience: 10, rating: 4.5 },
  { name: "Simran Kaur", experience: 15, rating: 4.8 },
  { name: "Aditya Joshi", experience: 4, rating: 3.9 },
  { name: "Neha Gupta", experience: 7, rating: 4.1 },
  { name: "Aman Desai", experience: 9, rating: 4.4 },
  { name: "Kavita Rao", experience: 5, rating: 4.0 },
  { name: "Vikram Mehta", experience: 11, rating: 4.6 },
];

// Helper to render stars with basic full & empty stars (half-star placeholder)
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={"full-" + i} style={{ color: "#f5c518" }}>★</span>);
  }
  if (halfStar) {
    stars.push(
      <span key="half" style={{ color: "#f5c518" }}>☆</span> // Placeholder for half star
    );
  }
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={"empty-" + i} style={{ color: "#ddd" }}>★</span>);
  }
  return stars;
};

// Card size types and random selector
const cardSizes = ["small", "medium", "large"] as const;
const getRandomSize = () => cardSizes[Math.floor(Math.random() * cardSizes.length)];

const Dashboard: React.FC = () => {
  const [experienceFilter, setExperienceFilter] = useState<string>("");
  const [ratingFilter, setRatingFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter lawyers based on experience, rating, and name search
  const filteredLawyers = useMemo(() => {
    return lawyers.filter((lawyer) => {
      const matchesExperience =
        experienceFilter === "" ||
        (experienceFilter === "5" && lawyer.experience >= 5) ||
        (experienceFilter === "10" && lawyer.experience >= 10);

      const matchesRating =
        ratingFilter === "" ||
        (ratingFilter === "4" && lawyer.rating >= 4) ||
        (ratingFilter === "4.5" && lawyer.rating >= 4.5);

      const matchesSearch =
        lawyer.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesExperience && matchesRating && matchesSearch;
    });
  }, [experienceFilter, ratingFilter, searchTerm]);

  return (
    <div className="container-fluid mt-4">
      {/* <h1 className="mb-4 text-primary">Customer Dashboard</h1> */}
      <div className="row" style={{ minHeight: "80vh" }}>
        {/* Sidebar / Filters with distinct background */}
        <aside
          className="col-md-3"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
            height: "fit-content",
            marginBottom: "1.5rem",
            marginRight: "2rem", // Increased gap from filter to cards
          }}
        >
          <h5 className="mb-4">Filter Options</h5>

          <div className="mb-3">
            <label htmlFor="searchInput" className="form-label fw-semibold">
              Search by Name
            </label>
            <input
              id="searchInput"
              type="search"
              className="form-control"
              placeholder="Type a lawyer's name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="experienceSelect" className="form-label fw-semibold">
              Experience (years)
            </label>
            <select
              id="experienceSelect"
              className="form-select"
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="5">5+</option>
              <option value="10">10+</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="ratingSelect" className="form-label fw-semibold">
              Rating
            </label>
            <select
              id="ratingSelect"
              className="form-select"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="4">4+</option>
              <option value="4.5">4.5+</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => {
              setExperienceFilter("");
              setRatingFilter("");
              setSearchTerm("");
            }}
          >
            Reset Filters
          </button>
        </aside>

        {/* Lawyers List with subtle background */}
        {/* Changed col-md-8 to keep proper layout considering sidebar margin */}
        <section
          className="col-md-8"
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            marginBottom: "1.5rem",
          }}
        >
          <div className="row">
            {filteredLawyers.length === 0 ? (
              <p className="text-muted fst-italic">No lawyers match your criteria.</p>
            ) : (
              filteredLawyers.map((lawyer, idx) => {
                const cardSizeClass = getRandomSize();
                return (
                  <div className="col-md-6 col-lg-4 mb-4" key={idx}>
                    <div
                      className={`card h-100 shadow-sm rounded-3 border-0 lawyer-card ${cardSizeClass}`}
                    >
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-primary">{lawyer.name}</h5>
                        <p className="card-text mb-2">
                          <strong>Experience:</strong> {lawyer.experience} years
                        </p>
                        <p className="card-text mb-3 d-flex align-items-center">
                          <strong>Rating:&nbsp;</strong>
                          <span className="me-2">{renderStars(lawyer.rating)}</span>
                          <span className="badge bg-success">
                            {lawyer.rating.toFixed(1)} ★
                          </span>
                        </p>
                        <button className="btn btn-outline-primary mt-auto align-self-start btn-sm">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>

      {/* Extra styles */}
      <style>{`
        /* Hover effect for cards */
        .lawyer-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .lawyer-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        /* Varying card sizes */
        .lawyer-card.small {
          height: 260px;
          font-size: 0.9rem;
        }
        .lawyer-card.medium {
          height: 320px;
          font-size: 1rem;
        }
        .lawyer-card.large {
          height: 380px;
          font-size: 1.1rem;
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 767px) {
          aside[col-md-3], section[col-md-9] {
            margin-bottom: 2rem;
          }
          /* Override fixed heights so cards adapt better on small screens */
          .lawyer-card.small,
          .lawyer-card.medium,
          .lawyer-card.large {
            height: auto;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
