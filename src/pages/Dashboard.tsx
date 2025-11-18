import { useState, useMemo } from "react";

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

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} style={{ color: "#f5c518" }}>
        ★
      </span>
    );
  }
  if (halfStar)
    stars.push(
      <span key="half" style={{ color: "#f5c518" }}>
        ☆
      </span>
    );
  for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
    stars.push(
      <span key={`empty-${i}`} style={{ color: "#ddd" }}>
        ★
      </span>
    );
  }
  return stars;
};

const borderColor = "#2196f3";
const cardBorder = "#d3d5db";
const cardRadius = "16px";
const inputBg = "#fff";
const lightBg = "#f8f9fa";

const Dashboard = () => {
  const [experienceFilter, setExperienceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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
      const matchesSearch = lawyer.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesExperience && matchesRating && matchesSearch;
    });
  }, [experienceFilter, ratingFilter, searchTerm]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: lightBg,
        fontFamily: "Inter, Arial, sans-serif",
        padding: 0,
      }}
    >
      <main
        style={{
          maxWidth: 1200,
          margin: "48px auto",
          background: "#fff",
          borderRadius: "28px",
          boxShadow: "0 6px 24px rgba(18,27,49,0.07)",
          padding: "2rem 2rem 2.5rem 2rem",
          border: `1.5px solid ${cardBorder}`,
          display: "flex",
          gap: "36px",
        }}
      >
        {/* Sidebar / Filter */}
        <aside
          style={{
            flex: "0 0 325px",
            background: lightBg,
            borderRadius: "16px",
            padding: "2rem 1.5rem 1.5rem 1.5rem",
            minHeight: "480px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            border: `2px solid ${borderColor}`,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <h4 style={{ fontWeight: 700, fontSize: "1.09rem", margin: 0 }}>
              Filter
            </h4>
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                color: borderColor,
                fontSize: "1.12rem",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onClick={() => {
                setExperienceFilter("");
                setRatingFilter("");
                setSearchTerm("");
              }}
            >
              Reset all
            </button>
          </div>
          <div>
            <label
              style={{
                fontWeight: 600,
                fontSize: "1.01rem",
                marginBottom: 4,
                display: "block",
              }}
            >
              Location
            </label>
            <input
              type="search"
              placeholder="Any area"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "9px 12px",
                borderRadius: "8px",
                border: `1.5px solid ${cardBorder}`,
                fontSize: "1rem",
                background: inputBg,
                marginBottom: "14px",
              }}
            />
          </div>
          <div>
            <button
              style={{
                display: "block",
                width: "100%",
                background: borderColor,
                color: "#fff",
                padding: "9px",
                borderRadius: "20px",
                fontWeight: 600,
                border: "none",
                fontSize: "1.07rem",
                marginBottom: "12px",
                cursor: "pointer",
              }}
              disabled
            >
              Categories
            </button>
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px" }}
            >
              <div style={{ flex: "1 0 42%", minWidth: "120px" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Family Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Criminal Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Civil Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Property Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Taxation Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Immigration Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Court Representation
                </label>
              </div>
              <div style={{ flex: "1 0 42%", minWidth: "120px" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Consumer Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Corporate Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Labour Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  IPR Law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Start up. Tech law
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Legal documentation
                </label>
                <label
                  style={{
                    display: "block",
                    fontWeight: 400,
                    fontSize: "0.97rem",
                    marginBottom: "7px",
                  }}
                >
                  <input type="checkbox" />
                  Notarization
                </label>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "16px" }}>
            <button
              style={{
                display: "block",
                width: "100%",
                background: borderColor,
                color: "#fff",
                padding: "9px",
                borderRadius: "20px",
                fontWeight: 600,
                border: "none",
                fontSize: "1.07rem",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              disabled
            >
              Ratings
            </button>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setRatingFilter("")}
                style={{
                  background: ratingFilter === "" ? borderColor : "#e3eaf2",
                  color: ratingFilter === "" ? "#fff" : "#1e293b",
                  minWidth: "33px",
                  border: "none",
                  borderRadius: "48px",
                  padding: "6px 12px",
                  fontWeight: 500,
                  fontSize: "1.01rem",
                  cursor: "pointer",
                }}
              >
                Any
              </button>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setRatingFilter(num === 5 ? "4.5" : "4")}
                  style={{
                    background:
                      ratingFilter === (num === 5 ? "4.5" : "4")
                        ? borderColor
                        : "#e3eaf2",
                    color:
                      ratingFilter === (num === 5 ? "4.5" : "4")
                        ? "#fff"
                        : "#1e293b",
                    minWidth: "33px",
                    border: "none",
                    borderRadius: "48px",
                    padding: "6px 10px",
                    fontWeight: 500,
                    fontSize: "1.01rem",
                    cursor: "pointer",
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </aside>
        {/* Lawyers List */}
        <section
          style={{
            flex: 1,
            minWidth: "340px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
          }}
        >
          {filteredLawyers.length === 0 ? (
            <p
              style={{
                color: "#a0aec0",
                fontStyle: "italic",
                gridColumn: "span 2",
              }}
            >
              No lawyers match your criteria.
            </p>
          ) : (
            filteredLawyers.map((lawyer, idx) => (
              <div
                key={idx}
                style={{
                  border: `2px solid ${cardBorder}`,
                  borderRadius: cardRadius,
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  padding: "1.1rem 1rem 0.9rem 1.2rem",
                  marginBottom: "0",
                  minHeight: "100px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  position: "relative",
                }}
                className="lawyer-card"
              >
                <strong
                  style={{
                    color: "#1a237e",
                    fontWeight: 600,
                    fontSize: "1.12rem",
                  }}
                >
                  {lawyer.name}
                </strong>
                <span style={{ color: "#444", fontSize: "0.98rem" }}>
                  Experience: {lawyer.experience} years
                </span>
                <span style={{ color: "#778", fontSize: "0.98rem" }}>
                  Rating: {renderStars(lawyer.rating)}
                  <span
                    style={{
                      fontWeight: 600,
                      color: borderColor,
                      marginLeft: 4,
                    }}
                  >
                    {lawyer.rating.toFixed(1)}
                  </span>
                </span>
                <button
                  style={{
                    alignSelf: "flex-end",
                    padding: "5px 16px",
                    borderRadius: "18px",
                    background: borderColor,
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.99rem",
                    border: "none",
                    letterSpacing: "0.006em",
                    marginTop: "4px",
                    boxShadow: "0 1px 6px rgba(33,150,243,0.05)",
                    cursor: "pointer",
                  }}
                >
                  View Profile
                </button>
              </div>
            ))
          )}
        </section>
      </main>
      <style>{`
        .lawyer-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          z-index: 10;
        }
        @media (max-width: 900px) {
          main { flex-direction: column !important; gap: 18px !important; padding: 1.2rem !important; }
          section { grid-template-columns: 1fr !important; min-width: 240px !important; }
          aside { min-width: 0 !important; padding: 1.3rem !important; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
