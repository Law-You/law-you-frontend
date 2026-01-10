import React, { useState } from 'react';
import { Close, CheckCircle, Description, Gavel } from '@mui/icons-material';
import './AgreementCheckout.css';

interface AgreementCheckoutProps {
  agreementName: string;
  onClose: () => void;
}

const AgreementCheckout: React.FC<AgreementCheckoutProps> = ({ agreementName, onClose }) => {
  const [step, setStep] = useState<'checkout' | 'confirmation'>('checkout');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleProceed = () => {
    if (email && name) {
      setStep('confirmation');
    }
  };

  const handleDownload = () => {
    // Simulate download
    alert(`Downloading ${agreementName} template...`);
    onClose();
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="checkout-close-btn" onClick={onClose}>
          <Close />
        </button>

        {step === 'checkout' ? (
          <>
            {/* Header */}
            <div className="checkout-header">
              <Gavel className="checkout-icon" />
              <h2 className="checkout-title">Agreement Checkout</h2>
            </div>

            {/* Agreement Details */}
            <div className="agreement-details-card">
              <div className="agreement-icon-wrapper">
                <Description className="agreement-doc-icon" />
              </div>
              <div className="agreement-info">
                <h3 className="agreement-name">{agreementName}</h3>
                <p className="agreement-description">
                  Professional legal template ready for customization
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="pricing-section">
              <div className="price-row">
                <span className="price-label">Original Price:</span>
                <span className="price-original">₹299</span>
              </div>
              <div className="price-row price-row-final">
                <span className="price-label-final">You Pay:</span>
                <span className="price-free">FREE</span>
              </div>
              <div className="price-note">
                <span className="badge-free">Limited Time Offer</span>
              </div>
            </div>

            {/* User Details Form */}
            <div className="checkout-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input-checkout"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input-checkout"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="checkout-actions">
              <button className="btn-checkout-secondary" onClick={onClose}>
                Cancel
              </button>
              <button
                className="btn-checkout-primary"
                onClick={handleProceed}
                disabled={!email || !name}
              >
                Continue to Download
              </button>
            </div>

            {/* Footer Note */}
            <div className="checkout-footer-note">
              <p>✓ Instant download after confirmation</p>
              <p>✓ Editable Word & PDF formats included</p>
            </div>
          </>
        ) : (
          <>
            {/* Confirmation Screen */}
            <div className="confirmation-content">
              <div className="success-icon-wrapper">
                <CheckCircle className="success-icon" />
              </div>
              <h2 className="confirmation-title">Order Confirmed!</h2>
              <p className="confirmation-message">
                Your agreement template is ready to download
              </p>

              <div className="confirmation-details">
                <div className="confirmation-row">
                  <span className="confirmation-label">Agreement:</span>
                  <span className="confirmation-value">{agreementName}</span>
                </div>
                <div className="confirmation-row">
                  <span className="confirmation-label">Email:</span>
                  <span className="confirmation-value">{email}</span>
                </div>
                <div className="confirmation-row">
                  <span className="confirmation-label">Amount Paid:</span>
                  <span className="confirmation-value-free">FREE</span>
                </div>
              </div>

              <button className="btn-download" onClick={handleDownload}>
                <Description />
                Download Agreement Template
              </button>

              <p className="confirmation-note">
                A copy has also been sent to your email address
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgreementCheckout;

