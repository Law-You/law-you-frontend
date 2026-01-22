import React, { useState } from 'react';
import { Close, CheckCircle, Business, Send } from '@mui/icons-material';
import './JoinUsDialog.css';

interface JoinUsDialogProps {
  onClose: () => void;
}

const JoinUsDialog: React.FC<JoinUsDialogProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.contactNo) {
      // Simulate submission
      setStep('success');
    }
  };

  const handleClose = () => {
    if (step === 'success') {
      setFormData({
        name: '',
        email: '',
        contactNo: ''
      });
      setStep('form');
    }
    onClose();
  };

  return (
    <div className="joinus-overlay" onClick={handleClose}>
      <div className="joinus-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="joinus-close-btn" onClick={handleClose}>
          <Close />
        </button>

        {step === 'form' ? (
          <>
            {/* Header */}
            <div className="joinus-header">
              <Business className="joinus-icon" />
              <h2 className="joinus-title">Join With Us</h2>
              <p className="joinus-subtitle">
                Partner with LawYou and grow your business with us
              </p>
            </div>

            {/* Form */}
            <div className="joinus-form">
              <div className="joinus-form-group">
                <label className="joinus-label">Your Name</label>
                <input
                  type="text"
                  className="joinus-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="joinus-form-group">
                <label className="joinus-label">Email Address</label>
                <input
                  type="email"
                  className="joinus-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="joinus-form-group">
                <label className="joinus-label">Contact Number</label>
                <input
                  type="tel"
                  className="joinus-input"
                  placeholder="Enter your contact number"
                  value={formData.contactNo}
                  onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="joinus-actions">
              <button className="btn-joinus-secondary" onClick={handleClose}>
                Cancel
              </button>
              <button
                className="btn-joinus-primary"
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.contactNo}
              >
                <Send />
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Success Screen */}
            <div className="joinus-success-content">
              <div className="joinus-success-icon-wrapper">
                <CheckCircle className="joinus-success-icon" />
              </div>
              <h2 className="joinus-success-title">Thank You!</h2>
              <p className="joinus-success-message">
                Your partnership request has been received. We'll get back to you soon!
              </p>

              <div className="joinus-success-details">
                <div className="joinus-success-row">
                  <span className="joinus-success-label">Name:</span>
                  <span className="joinus-success-value">{formData.name}</span>
                </div>
                <div className="joinus-success-row">
                  <span className="joinus-success-label">Email:</span>
                  <span className="joinus-success-value">{formData.email}</span>
                </div>
                <div className="joinus-success-row">
                  <span className="joinus-success-label">Contact:</span>
                  <span className="joinus-success-value">{formData.contactNo}</span>
                </div>
              </div>

              <button className="btn-joinus-done" onClick={handleClose}>
                Done
              </button>

              <p className="joinus-success-note">
                We'll contact you within 24-48 hours to discuss partnership opportunities
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JoinUsDialog;
