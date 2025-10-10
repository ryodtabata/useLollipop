import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../utils/emailConfig';
import {
  PhoneOutlined,
  MailOutlined,
  MessageOutlined,
  UserOutlined,
  SendOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const FreeConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project or questions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send email using EmailJS
        const emailParams = {
          to_email: 'ryotabata10@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: `Free Consultation Request from ${formData.name}

Email: ${formData.email}

Project Description:
${formData.description}

This person is requesting a free consultation. Please reach out to them as soon as possible.`,
          subject: 'Free Consultation Request - Lollipop Digital Solutions',
        };

        // Send email using EmailJS configuration
        const response = await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templates.consultation,
          emailParams,
          emailConfig.publicKey
        );

        console.log('EmailJS Response:', response);

        console.log('Consultation email sent successfully');
        setIsSubmitted(true);

        // Confirmation screen stays permanently - user can navigate away if needed
      } catch (error) {
        console.error('Failed to send consultation email:', error);
        console.error('EmailJS Error Details:', error.text || error.message);
        alert(
          `Email failed to send: ${
            error.text || error.message
          }. Please check console for details.`
        );
        // Still show success message even if email fails
        setIsSubmitted(true);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="page-container">
        <div className="success-container">
          <div className="success-content">
            <CheckCircleOutlined className="success-icon" />
            <h1>Message Sent!</h1>
            <p>
              Thank you for reaching out. I'll get back to you as soon as
              possible!
            </p>
            <div className="success-details">
              <p>
                <strong>What happens next?</strong>
              </p>
              <ul>
                <li>We'll reach out to discuss your needs within 24 hours!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="consultation-hero">
        <div className="hero-content-consultation">
          <MessageOutlined className="consultation-hero-icon" />
          <h1>Free Consultation</h1>
          <p>
            Let's discuss your project and explore how I can help bring your
            ideas to life
          </p>
        </div>
      </div>

      <div className="consultation-content">
        <div className="contact-info-section">
          <h2>Reach Out Directly</h2>
          <p>
            Prefer to contact me directly? Feel free to reach out using any of
            the methods below:
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <MailOutlined />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>ryotabata10@gmail.com</p>
                <span>Response within 24 hours</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <PhoneOutlined />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+1 (780) 527-4997</p>
              </div>
            </div>
          </div>
        </div>

        <div className="consultation-form-section">
          <div className="form-container consultation-form-container">
            <div className="form-header">
              <h2>Send Me a Message</h2>
              <p>
                Tell me about your project, ask questions, or just say hello!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <UserOutlined className="form-icon" />
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <MailOutlined className="form-icon" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="description">
                  <MessageOutlined className="form-icon" />
                  Tell me about your project *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, budget, or any questions you have..."
                  rows="6"
                  className={errors.description ? 'error' : ''}
                />
                {errors.description && (
                  <span className="error-message">{errors.description}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">
                <SendOutlined />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="consultation-benefits">
        <h3>Why Choose a Free Consultation?</h3>
        <div className="benefits-grid">
          <div className="benefit-item">
            <CheckCircleOutlined className="benefit-icon" />
            <div className="benefit-text">
              <h4>No Commitment</h4>
              <p>Completely free with no obligations</p>
            </div>
          </div>
          <div className="benefit-item">
            <CheckCircleOutlined className="benefit-icon" />
            <div className="benefit-text">
              <h4>Expert Advice</h4>
              <p>Get professional insights on your project</p>
            </div>
          </div>
          <div className="benefit-item">
            <CheckCircleOutlined className="benefit-icon" />
            <div className="benefit-text">
              <h4>Custom Strategy</h4>
              <p>Tailored approach for your specific needs</p>
            </div>
          </div>
          <div className="benefit-item">
            <CheckCircleOutlined className="benefit-icon" />
            <div className="benefit-text">
              <h4>Clear Timeline</h4>
              <p>Realistic project timeline and milestones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultationPage;
