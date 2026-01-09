import React, { useState } from 'react';
import { Close, CheckCircle, Feedback, Send } from '@mui/icons-material';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import './FeedbackDialog.css';

interface FeedbackDialogProps {
  onClose: () => void;
}

const FeedbackDialog: React.FC<FeedbackDialogProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Feedback',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      // Simulate submission
      setStep('success');
    }
  };

  const handleClose = () => {
    if (step === 'success') {
      setFormData({
        name: '',
        email: '',
        category: 'General Feedback',
        message: ''
      });
      setStep('form');
    }
    onClose();
  };

  return (
    <div className="feedback-overlay" onClick={handleClose}>
      <div className="feedback-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="feedback-close-btn" onClick={handleClose}>
          <Close />
        </button>

        {step === 'form' ? (
          <>
            {/* Header */}
            <div className="feedback-header">
              <Feedback className="feedback-icon" />
              <h2 className="feedback-title">Share Your Thoughts</h2>
              <p className="feedback-subtitle">
                Your feedback helps us improve and serve you better
              </p>
            </div>

            {/* Form */}
            <div className="feedback-form">
              <div className="feedback-form-group">
                <label className="feedback-label">Your Name</label>
                <input
                  type="text"
                  className="feedback-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="feedback-form-group">
                <label className="feedback-label">Email Address</label>
                <input
                  type="email"
                  className="feedback-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="feedback-form-group">
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="feedback-category-label">Feedback Category</InputLabel>
                  <Select
                    labelId="feedback-category-label"
                    id="feedback-category-select"
                    value={formData.category}
                    onChange={(e: SelectChangeEvent<string>) => setFormData({ ...formData, category: e.target.value })}
                    label="Feedback Category"
                    className="feedback-category-select"
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 300,
                          zIndex: 10001,
                        },
                      },
                      style: {
                        zIndex: 10001,
                      },
                    }}
                  >
                    <MenuItem value="General Feedback">General Feedback</MenuItem>
                    <MenuItem value="Website Experience">Website Experience</MenuItem>
                    <MenuItem value="Lawyer Services">Lawyer Services</MenuItem>
                    <MenuItem value="Legal Learning">Legal Learning</MenuItem>
                    <MenuItem value="Agreements">Agreements</MenuItem>
                    <MenuItem value="Technical Issue">Technical Issue</MenuItem>
                    <MenuItem value="Suggestion">Suggestion</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="feedback-form-group">
                <label className="feedback-label">Your Feedback</label>
                <textarea
                  className="feedback-textarea"
                  rows={5}
                  placeholder="Tell us what you think... We'd love to hear your suggestions, complaints, or compliments!"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <div className="feedback-char-count">
                  {formData.message.length} / 1000 characters
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="feedback-actions">
              <button className="btn-feedback-secondary" onClick={handleClose}>
                Cancel
              </button>
              <button
                className="btn-feedback-primary"
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.message}
              >
                <Send />
                Submit Feedback
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Success Screen */}
            <div className="feedback-success-content">
              <div className="feedback-success-icon-wrapper">
                <CheckCircle className="feedback-success-icon" />
              </div>
              <h2 className="feedback-success-title">Thank You!</h2>
              <p className="feedback-success-message">
                Your feedback has been received and means a lot to us
              </p>

              <div className="feedback-success-details">
                <div className="feedback-success-row">
                  <span className="feedback-success-label">Name:</span>
                  <span className="feedback-success-value">{formData.name}</span>
                </div>
                <div className="feedback-success-row">
                  <span className="feedback-success-label">Email:</span>
                  <span className="feedback-success-value">{formData.email}</span>
                </div>
                <div className="feedback-success-row">
                  <span className="feedback-success-label">Category:</span>
                  <span className="feedback-success-value">{formData.category}</span>
                </div>
              </div>

              <button className="btn-feedback-done" onClick={handleClose}>
                Done
              </button>

              <p className="feedback-success-note">
                We'll get back to you within 24-48 hours if needed
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackDialog;

