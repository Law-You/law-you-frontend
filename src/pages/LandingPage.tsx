import { useNavigate } from 'react-router-dom';
import landingPageBackground from '../assets/landingPagebackground.png';
import barCertifiedIcon from '../assets/barCertified.png';
import securedDocsIcon from '../assets/securedDocs.png';
import transparentFeesIcon from '../assets/transsparentFees.png';
import supportIcon from '../assets/support.png';

const buttonBlue = '#004DE6';

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div
      style={{
        fontFamily: 'Inter, Arial, sans-serif',
        background: '#1E1E1E',
        minHeight: '100vh',
        padding: 0,
        margin: 0,
        width: '100%',
        color: '#ffffff',
      }}
    >
      <main style={{ width: '100%', padding: 0, margin: 0 }}>
        {/* Hero Section */}
        <section
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontSize: '4rem',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Courtroom Confidence. Website Convenience.
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '1.25rem',
              color: '#ffffff',
              marginBottom: '3rem',
              lineHeight: 1.6,
              textAlign: 'center',
              maxWidth: '700px',
            }}
          >
            Legal help, simplified. Find trusted lawyers and manage your case with clarity.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
            <button
              onClick={() => navigate('/findLawyer')}
              style={{
                padding: '0.875rem 2rem',
                background: buttonBlue,
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              FIND LAWYER
            </button>
            <button
              onClick={() => navigate('/findLawyer')}
              style={{
                padding: '0.875rem 2rem',
                background: buttonBlue,
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              BOOK CONSULTANT
            </button>
          </div>

          {/* Scales of Justice Image */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '6rem',
            }}
          >
            <img
              src={landingPageBackground}
              alt="Scales of Justice"
              style={{
                maxWidth: '800px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Feature Cards Section */}
          <section
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto 6rem auto',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
              }}
            >
              {/* Case Timeline Card */}
              <div
                style={{
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '1rem',
                  color: '#000000',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#000000',
                    marginBottom: '0.75rem',
                  }}
                >
                  Case Timeline
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6 }}>
                  Know every step from filing to verdict with clear milestones.
                </p>
              </div>

              {/* Evidence Uploaded Card */}
              <div
                style={{
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '1rem',
                  color: '#000000',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#000000',
                    marginBottom: '0.75rem',
                  }}
                >
                  Evidence Uploaded
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6 }}>
                  Securely upload documents and media for your legal team.
                </p>
              </div>

              {/* Appointments Card */}
              <div
                style={{
                  padding: '2rem',
                  backgroundColor: '#ffffff',
                  borderRadius: '1rem',
                  color: '#000000',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#000000',
                    marginBottom: '0.75rem',
                  }}
                >
                  Appointments
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6 }}>
                  Schedule, reschedule, and track consultations with ease.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Section with Icons - Full Width White Background */}
          <section
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              padding: '4rem 0',
              marginTop: '0',
            }}
          >
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                {/* Bar Certified */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={barCertifiedIcon}
                      alt="Bar Certified"
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#000000',
                    }}
                  >
                    Bar Certified
                  </div>
                </div>

                {/* Secure Docs */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={securedDocsIcon}
                      alt="Secure Docs"
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#000000',
                    }}
                  >
                    Secure Docs
                  </div>
                </div>

                {/* Transparent Fees */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={transparentFeesIcon}
                      alt="Transparent Fees"
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#000000',
                    }}
                  >
                    Transparent Fees
                  </div>
                </div>

                {/* 24/7 Support */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={supportIcon}
                      alt="24/7 Support"
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#000000',
                    }}
                  >
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Continuation Section with Dark Background */}
        <section
          style={{
            width: '100%',
            backgroundColor: '#1E1E1E',
            minHeight: '200px',
          }}
        />
      </main>
    </div>
  );
};

export default LandingPage;
