import React from 'react';

const brandBlue = '#2563eb';
const heroBg = '#fff7ed';
const darkText = '#191c1e';
const borderGray = '#c9cbce';

const howItWorks = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={brandBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="13" r="10" />
        <line x1="21" y1="21" x2="27" y2="27" />
      </svg>
    ),
    label: 'Search by need',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={brandBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="12" r="3" />
        <circle cx="19" cy="12" r="3" />
        <path d="M2 22c0-4 7-6 12-6s12 2 12 6" />
      </svg>
    ),
    label: 'Choose and book',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={brandBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="14" cy="16" rx="7" ry="7" />
        <circle cx="14" cy="11" r="3" />
        <path d="M19 21c2 .5 3.5 1.5 3.5 2.5V25H4.5v-1.5C4.5 22.5 6 21.5 8 21" />
      </svg>
    ),
    label: 'Chat or meet',
  },
];

const Home = () => (
  <div
    style={{
      fontFamily: `'Inter', 'Segoe UI', Arial, sans-serif`,
      background: '#f8fafc',
      minHeight: '100vh',
      padding: 0,
      margin: 0,
    }}
  >
    <main
      style={{
        maxWidth: 1100,
        margin: '44px auto 0 auto',
        padding: '2.5rem 2rem 3rem 2rem',
        background: heroBg,
        borderRadius: 30,
        boxShadow: '0 2px 8px rgba(30,42,65,0.08)',
        border: `2.5px solid ${borderGray}`,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 580,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 44,
        }}
      >
        {/* Hero Text */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 520 }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              margin: '0 0 1.1rem 0',
              color: darkText,
              lineHeight: 1.08,
            }}
          >
            <span style={{ color: brandBlue }}>Legal</span> Help at<br />
            Your <span style={{ color: brandBlue }}>Doorstep</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#3b3d42', marginBottom: 32 }}>
            Hire verified advocates in 3 taps online or in person
          </p>
          <div style={{ display: 'flex', gap: 18 }}>
            <a
              href="/find-lawyer"
              style={{
                padding: '13px 32px',
                background: brandBlue,
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.09rem',
                border: 'none',
                borderRadius: 16,
                boxShadow: '0 2px 8px rgba(37,99,235,0.09)',
                textDecoration: 'none',
                letterSpacing: '0.002em',
              }}
            >
              Find a Lawyer
            </a>
            <a
              href="/services"
              style={{
                padding: '13px 32px',
                background: '#fff',
                border: `2px solid ${brandBlue}`,
                color: brandBlue,
                fontWeight: 600,
                fontSize: '1.09rem',
                borderRadius: 16,
                textDecoration: 'none',
                letterSpacing: '0.002em',
              }}
            >
              Explore services
            </a>
          </div>
        </div>
        {/* Hero Graphic (right) */}
        <div style={{
          flex: '0 0 320px',
          minHeight: 200,
          maxWidth: 320,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Minimal phone illustration */}
          <div style={{
            width: 180,
            height: 320,
            border: `2.5px solid ${borderGray}`,
            borderRadius: 22,
            background: brandBlue,
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}>
            <div style={{
              marginTop: 34,
              width: 128,
              height: 56,
              background: '#70b5f8',
              borderRadius: 12,
              opacity: 0.96,
            }} />
            {/* Simulates content on phone */}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <h2 style={{ fontSize: '1.21rem', color: darkText, fontWeight: 800, margin: '2.5rem 0 0.85rem 0', letterSpacing: '-0.5px' }}>
        How it works
      </h2>
      <div
        style={{
          width: '100%',
          display: 'flex',
          gap: 60,
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {howItWorks.map((step, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 150,
            gap: 8,
          }}>
            <div style={{ marginBottom: 6 }}>{step.icon}</div>
            <span style={{ color: '#24272b', fontWeight: 500, fontSize: '1.04rem' }}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Home;
