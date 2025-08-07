import React, { useState, useEffect } from 'react';

const featurePanels = [
  {
    title: 'Browse Lawyers',
    content:
      'Explore and filter qualified lawyers by experience and rating, tailored to your needs.',
  },
  {
    title: 'Secure Signup & Login',
    content: 'Enjoy seamless and secure account creation and access to your personalized dashboard.',
  },
  {
    title: 'Personalized Dashboards',
    content:
      'Customers, lawyers, and students get dedicated dashboards to manage appointments and profiles.',
  },
  {
    title: 'Appointment Scheduling',
    content: 'Easily schedule appointments with lawyers through user-friendly tools.',
  },
  {
    title: 'Legal Resources',
    content: 'Access legal updates, knowledge articles, and resources relevant to you.',
  },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featurePanels.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featurePanels.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featurePanels.length);
  };

  const selectIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="home container py-5 d-flex flex-column align-items-center text-center"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#2c3e50',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        padding: '3rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h1 className="mb-4 fw-bold" style={{ fontSize: '3rem' }}>
        Welcome to <span style={{ color: '#2980b9' }}>LawYou</span>
      </h1>

      <p className="lead mb-5" style={{ fontSize: '1.3rem', lineHeight: 1.6, maxWidth: '700px' }}>
        Your trusted legal companion! Connect with experienced lawyers, get personalized legal advice,
        and manage your legal concerns — all in one place.
      </p>

      {/* Carousel Container */}
      <div
        className="carousel-container mx-auto mb-5"
        style={{
          maxWidth: '700px',
          position: 'relative',
          height: '180px',
        }}
      >
        {/* Panels wrapper */}
        <div
          className="panels-wrapper"
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            width: `${featurePanels.length * 100}%`,
            transform: `translateX(-${(100 / featurePanels.length) * currentIndex}%)`,
          }}
        >
          {featurePanels.map(({ title, content }, i) => (
            <div
              key={i}
              className="panel"
              style={{
                flex: `0 0 ${100 / featurePanels.length}%`,
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                marginRight: i < featurePanels.length - 1 ? '1rem' : '0',
                userSelect: 'none',
              }}
            >
              <h3 style={{ color: '#34495e', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontSize: '1.1rem', color: '#556677' }}>{content}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            fontSize: '1.5rem',
            color: '#2980b9',
            userSelect: 'none',
          }}
        >
          ‹
        </button>
        <button
          onClick={goNext}
          aria-label="Next"
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            fontSize: '1.5rem',
            color: '#2980b9',
            userSelect: 'none',
          }}
        >
          ›
        </button>

        {/* Pagination dots */}
        <div
          className="dots-container"
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
            userSelect: 'none',
          }}
        >
          {featurePanels.map((_, i) => (
            <button
              key={i}
              onClick={() => selectIndex(i)}
              aria-label={`Go to panel ${i + 1}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: i === currentIndex ? '#2980b9' : '#ccc',
                transition: 'background-color 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <section style={{ maxWidth: '700px' }}>
        <h2 className="mb-3" style={{ color: '#34495e', fontWeight: 600 }}>
          Get Started
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#3a3a3a' }}>
          If you don’t have an account yet,&nbsp;
          <a
            href="/signup"
            className="text-primary fw-semibold"
            style={{ textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1b5fa7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#2980b9')}
          >
            sign up here
          </a>
          &nbsp;to begin your journey with LawYou. Already a member?&nbsp;
          <a
            href="/login"
            className="text-primary fw-semibold"
            style={{ textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1b5fa7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#2980b9')}
          >
            Log in
          </a>
          &nbsp;and access your dashboard.
        </p>
      </section>
    </div>
  );
};

export default Home;
