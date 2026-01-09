import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import videoCameraIcon from '../assets/videoCamera.svg';
import phoneIcon from '../assets/phone.svg';
import personIcon from '../assets/person.svg';
import upiIcon from '../assets/upi.svg';
import cardIcon from '../assets/card.svg';
import bankIcon from '../assets/bank.svg';
import './BookConsultation.css';

interface Lawyer {
  id: number;
  name: string;
  rating: number;
  experience: number;
  location: string;
  imageUrl: string;
  hourlyRate: number;
}

type ConsultationType = 'video' | 'phone' | 'in-person';
type PaymentMethod = 'upi' | 'card' | 'netbanking';

const BookConsultation = () => {
  const navigate = useNavigate();
  const { lawyerId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form state
  const [consultationType, setConsultationType] = useState<ConsultationType>('video');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<number | null>(null);
  const [problemTitle, setProblemTitle] = useState('Property Ownership Dispute with Family Member');
  const [problemDescription, setProblemDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [errorMessage, setErrorMessage] = useState('');

  // Dummy lawyer data (in real app, fetch based on lawyerId)
  const lawyer: Lawyer = {
    id: parseInt(lawyerId || '1'),
    name: 'Lusy Salvator',
    rating: 4.0,
    experience: 5,
    location: 'Chennai, India',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    hourlyRate: 2500
  };

  const dates = [
    '16th Oct', '18th Oct', '20th Oct', '23rd Oct',
    '25th Oct', '27th Oct'
  ];

  const times = [
    '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm',
    '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm'
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star filled">★</span>);
    }
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    return stars;
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      // Validate step 1 fields
      if (!consultationType) {
        setErrorMessage('Please select a consultation type');
        setTimeout(() => setErrorMessage(''), 4000);
        return;
      }
      if (!selectedDate || selectedDateIndex === null) {
        setErrorMessage('Please select a date for your consultation');
        setTimeout(() => setErrorMessage(''), 4000);
        return;
      }
      if (!selectedTime || selectedTimeIndex === null) {
        setErrorMessage('Please select a time for your consultation');
        setTimeout(() => setErrorMessage(''), 4000);
        return;
      }
      if (!problemTitle.trim()) {
        setErrorMessage('Please enter a title for your problem');
        setTimeout(() => setErrorMessage(''), 4000);
        return;
      }
    }
    
    if (currentStep < 3) {
      setErrorMessage('');
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePayAndConfirm = () => {
    setCurrentStep(3);
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <div className="step-number">1</div>
        <span>Consultation Details</span>
      </div>
      <div className="step-line"></div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <div className="step-number">2</div>
        <span>Payment</span>
      </div>
      <div className="step-line"></div>
      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <div className="step-number">3</div>
        <span>Confirmation</span>
      </div>
    </div>
  );

  const renderBookingSummary = () => (
    <div className="booking-summary-card">
      <div className="summary-header">
        <h3>BOOKING SUMMARY</h3>
      </div>
      <div className="summary-content">
        <div className="lawyer-summary">
          <img 
            src={lawyer.imageUrl} 
            alt={lawyer.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/120/4338ca/ffffff?text=' + lawyer.name.split(' ').map(n => n[0]).join('');
            }}
          />
          <div className="rating-stars-summary">
            {renderStars(lawyer.rating)}
          </div>
          <div className="lawyer-name-badge-summary">
            <span>{lawyer.name.toUpperCase()}</span>
          </div>
        </div>

        <div className="summary-details">
          <div className="summary-item">
            <h4>Title</h4>
            <div className="summary-value">
              <span>{problemTitle}</span>
            </div>
          </div>

          <div className="summary-item">
            <h4>Consultation Details</h4>
            <div className="summary-value">
              <span>{consultationType === 'video' ? 'Video Consultation' : consultationType === 'phone' ? 'Phone Consultation' : 'In-Person Consultation'}</span>
            </div>
          </div>

          <div className="summary-item">
            <h4>Consultation Timings</h4>
            <div className="summary-value">
              <span>{selectedDate || '23rd Oct'}, {selectedTime || '9:00 am'}</span>
            </div>
          </div>

          <div className="summary-pricing">
            <div className="pricing-row">
              <span>Consultation Fee</span>
              <span>₹ {lawyer.hourlyRate}</span>
            </div>
            <div className="pricing-row total">
              <span>Total</span>
              <span>₹ {lawyer.hourlyRate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="book-consultation-container">
      {/* Back Button */}
      <button className="back-button-booking" onClick={() => navigate(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        BACK
      </button>

      {/* Step Indicator */}
      {renderStepIndicator()}

      {/* Error Toast */}
      {errorMessage && (
        <div className="booking-toast">
          <span className="toast-icon">⚠️</span>
          {errorMessage}
        </div>
      )}

      <div className="booking-content">
        {/* Left Column - Forms */}
        <div className="booking-forms">
          {currentStep === 1 && (
            <>
              {/* Select Consultation Type */}
              <div className="form-section">
                <div className="form-section-header">
                  <h3>SELECT CONSULTATION TYPE</h3>
                </div>
                <div className="consultation-types">
                  <button 
                    className={`consultation-type-btn ${consultationType === 'video' ? 'active' : ''}`}
                    onClick={() => {
                      setConsultationType('video');
                      setErrorMessage('');
                    }}
                  >
                    <img src={videoCameraIcon} alt="Video" className="type-icon" />
                    <span>video call</span>
                  </button>
                  <button 
                    className={`consultation-type-btn ${consultationType === 'phone' ? 'active' : ''}`}
                    onClick={() => {
                      setConsultationType('phone');
                      setErrorMessage('');
                    }}
                  >
                    <img src={phoneIcon} alt="Phone" className="type-icon" />
                    <span>Phone call</span>
                  </button>
                  <button 
                    className={`consultation-type-btn ${consultationType === 'in-person' ? 'active' : ''}`}
                    onClick={() => {
                      setConsultationType('in-person');
                      setErrorMessage('');
                    }}
                  >
                    <img src={personIcon} alt="In Person" className="type-icon" />
                    <span>In - Person</span>
                  </button>
                </div>
              </div>

              {/* Select Date and Problem Description */}
              <div className="form-row">
                <div className="form-section half">
                  <div className="form-section-header">
                    <h3>SELECT DATE</h3>
                  </div>
                  <div className="date-grid">
                    {dates.map((date, index) => (
                      <button
                        key={index}
                        className={`date-btn ${selectedDateIndex === index ? 'active' : ''}`}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedDateIndex(index);
                          setErrorMessage('');
                        }}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-section half">
                  <div className="form-section-header">
                    <h3>PROBLEM DESCRIPTION</h3>
                  </div>
                  <div className="problem-description">
                    <label>Title:</label>
                    <input 
                      type="text" 
                      value={problemTitle}
                      onChange={(e) => {
                        setProblemTitle(e.target.value);
                        setErrorMessage('');
                      }}
                      className="problem-title-input"
                    />
                    <label>Description:</label>
                    <textarea 
                      value={problemDescription}
                      onChange={(e) => setProblemDescription(e.target.value)}
                      className="problem-description-textarea"
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Select Time */}
              <div className="form-section">
                <div className="form-section-header">
                  <h3>SELECT TIME</h3>
                </div>
                <div className="time-grid">
                  {times.map((time, index) => (
                    <button
                      key={index}
                      className={`time-btn ${selectedTimeIndex === index ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedTime(time);
                        setSelectedTimeIndex(index);
                        setErrorMessage('');
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <div className="form-section">
              <div className="form-section-header">
                <h3>SELECT PAYMENT METHOD</h3>
              </div>
              <div className="payment-methods">
                <button 
                  className={`payment-method-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <img src={upiIcon} alt="UPI" className="payment-icon" />
                  <span>UPI</span>
                </button>
                <button 
                  className={`payment-method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <img src={cardIcon} alt="Card" className="payment-icon" />
                  <span>Card</span>
                </button>
                <button 
                  className={`payment-method-btn ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('netbanking')}
                >
                  <img src={bankIcon} alt="Net Banking" className="payment-icon" />
                  <span>Net banking</span>
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="confirmation-section">
              <div className="confirmation-card">
                <div className="lawyer-confirmation-card">
                  <div className="lawyer-name-badge-confirmation">
                    <span>{lawyer.name.toUpperCase()}</span>
                  </div>
                  <img 
                    src={lawyer.imageUrl} 
                    alt={lawyer.name}
                    className="lawyer-confirmation-image"
                  />
                  <div className="rating-stars-confirmation">
                    {renderStars(lawyer.rating)}
                  </div>
                  <p className="experience-confirmation">{lawyer.experience}+ years of experience</p>
                  <p className="location-confirmation">{lawyer.location}</p>
                  <div className="confirmation-buttons">
                    <button className="btn-about-confirmation">About</button>
                    <button className="btn-price-confirmation">₹{lawyer.hourlyRate}</button>
                  </div>
                </div>
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h2>You've successfully booked your Legal advisor!</h2>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {currentStep === 1 && (
            <button className="continue-btn" onClick={handleContinue}>
              Continue to payment
            </button>
          )}
          {currentStep === 2 && (
            <button className="continue-btn" onClick={handlePayAndConfirm}>
              Pay and Confirm →
            </button>
          )}
          {currentStep === 3 && (
            <button className="continue-btn" onClick={() => navigate('/findLawyer')}>
              Okay!
            </button>
          )}
        </div>

        {/* Right Column - Booking Summary */}
        {currentStep !== 3 && renderBookingSummary()}
      </div>
    </div>
  );
};

export default BookConsultation;
