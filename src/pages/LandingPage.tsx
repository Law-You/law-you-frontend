
import { useNavigate } from 'react-router-dom';
import courtImage from '../assets/court.png';

const brandBlue = '#4338ca';
const lightGray = '#f8f9fa';
const darkText = '#1f2937';
const grayText = '#6b7280';
const borderGray = '#e5e7eb';

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
  <div
    style={{
      fontFamily: `Arial, sans-serif`,
      background: '#ffffff',
      minHeight: '100vh',
      padding: 0,
      margin: 0,
      width: '100%',
    }}
  >
    <main style={{ width: '100%', padding: '2rem 0' }}>
      {/* Hero Section */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '4rem',
          marginBottom: '4rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1, maxWidth: '600px' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: darkText,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Legal help, simplified. Find trusted lawyers and manage your case with clarity.
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: grayText,
              marginBottom: '2rem',
              lineHeight: 1.6,
            }}
          >
            Search by specialty, book consultations, and track case progress in one secure place.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <button
              onClick={() => navigate('/findLawyer')}
              style={{
                padding: '0.75rem 1.5rem',
                background: brandBlue,
                color: '#fff',
                border: 'none',
                borderRadius: '0.375rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Find a Lawyer
            </button>
            <button
              onClick={() => navigate('/findLawyer')}
              style={{
                padding: '0.75rem 1.5rem',
                background: lightGray,
                color: darkText,
                border: `1px solid ${borderGray}`,
                borderRadius: '0.375rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Book Consultation
            </button>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: grayText,
                border: 'none',
                borderRadius: '0.375rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Explore Legal Topics
            </button>
          </div>

          {/* Statistics */}
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.125rem', color: darkText }}>
                500+ vetted lawyers
              </div>
              <div style={{ fontSize: '0.875rem', color: grayText }}>
                Across 30+ specialties
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.125rem', color: darkText }}>
                Secure & Transparent
              </div>
              <div style={{ fontSize: '0.875rem', color: grayText }}>
                Clear timelines, evidence, outcomes
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <img
          src={courtImage}
          alt="Legal Services"
          style={{
            flex: '0 0 400px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '0.5rem',
          }}
        />
      </section>

      {/* Feature Cards Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 4rem auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: brandBlue,
                marginBottom: '0.5rem',
              }}
            >
              Bar Certified
            </div>
            <div style={{ fontSize: '0.875rem', color: grayText }}>
              Trusted by clients nationwide
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: brandBlue,
                marginBottom: '0.5rem',
              }}
            >
              Secure Docs
            </div>
            <div style={{ fontSize: '0.875rem', color: grayText }}>
              Trusted by clients nationwide
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: brandBlue,
                marginBottom: '0.5rem',
              }}
            >
              Transparent Fees
            </div>
            <div style={{ fontSize: '0.875rem', color: grayText }}>
              Trusted by clients nationwide
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: brandBlue,
                marginBottom: '0.5rem',
              }}
            >
              24/7 Support
            </div>
            <div style={{ fontSize: '0.875rem', color: grayText }}>
              Trusted by clients nationwide
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          <div
            style={{
              padding: '1.5rem',
              border: `1px solid ${borderGray}`,
              borderRadius: '0.5rem',
              background: '#ffffff',
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: darkText,
                marginBottom: '0.5rem',
              }}
            >
              Case Timeline
            </h3>
            <p style={{ fontSize: '0.875rem', color: grayText }}>
              Know every step from filing to verdict with clear milestones.
            </p>
          </div>
          <div
            style={{
              padding: '1.5rem',
              border: `1px solid ${borderGray}`,
              borderRadius: '0.5rem',
              background: '#ffffff',
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: darkText,
                marginBottom: '0.5rem',
              }}
            >
              Evidence Upload
            </h3>
            <p style={{ fontSize: '0.875rem', color: grayText }}>
              Securely upload documents and media for your legal team.
            </p>
          </div>
          <div
            style={{
              padding: '1.5rem',
              border: `1px solid ${borderGray}`,
              borderRadius: '0.5rem',
              background: '#ffffff',
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: darkText,
                marginBottom: '0.5rem',
              }}
            >
              Appointments
            </h3>
            <p style={{ fontSize: '0.875rem', color: grayText }}>
              Schedule, reschedule, and track consultations with ease.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
  );
};

export default LandingPage;
