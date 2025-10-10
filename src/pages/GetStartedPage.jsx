import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../utils/emailConfig';
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  BankOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))
    ) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please tell us about your project';
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
          phone: formData.phone,
          company: formData.company || 'Not specified',
          project_description: formData.description,
          message: `New project inquiry from ${formData.name}
          
Company: ${formData.company || 'Not specified'}
Phone: ${formData.phone}
Email: ${formData.email}

PROJECT DESCRIPTION:
${formData.description}

This person is interested in starting a new project with Lollipop Digital Solutions. Please reach out to them within 24 hours to discuss their project requirements.`,
          subject: 'New Project Inquiry - Get Started Form',
        };

        // Send email using EmailJS configuration
        await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templates.getStarted,
          emailParams,
          emailConfig.publicKey
        );

        console.log('Email sent successfully');
        setIsSubmitted(true);

        // Confirmation screen stays permanently - user can navigate away if needed
      } catch (error) {
        console.error('Failed to send email:', error);
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
            <h1>Thank You!</h1>
            <p>
              We've received your information and will contact you within 24
              hours.
            </p>
            <div className="success-details">
              <p>
                <strong>What's Next?</strong>
              </p>
              <ul>
                <li>
                  We'll reach out to you to discuss your project in the next 24
                  hours!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="get-started-hero">
        <div className="hero-content-form">
          <RocketOutlined className="form-hero-icon" />
          <h1>Get Started Today</h1>
          <p>
            Ready to bring your digital vision to life? Let's discuss your
            project!
          </p>
        </div>
      </div>

      <div className="form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Tell Us About Your Project</h2>
            <p>
              Fill out this quick form and we'll get back to you with a custom
              proposal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <UserOutlined className="form-icon" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="company">
                  <BankOutlined className="form-icon" />
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name (optional)"
                />
              </div>
            </div>

            <div className="form-row">
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
                <label htmlFor="phone">
                  <PhoneOutlined className="form-icon" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">
                <MessageOutlined className="form-icon" />
                Tell Us About Your Project *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project goals, timeline, budget, technology preferences, or any specific requirements..."
                rows="5"
                className={errors.description ? 'error' : ''}
              />
              {errors.description && (
                <span className="error-message">{errors.description}</span>
              )}
            </div>

            <button type="submit" className="submit-btn">
              <RocketOutlined /> Im ready. Lets do this!
            </button>
          </form>

          <div className="form-benefits">
            <h3>Why Choose Lollipop Digital Solutions?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <CheckCircleOutlined className="benefit-icon" />
                <span>Free Consultation</span>
              </div>
              <div className="benefit-item">
                <CheckCircleOutlined className="benefit-icon" />
                <span>24/7 Support</span>
              </div>
              <div className="benefit-item">
                <CheckCircleOutlined className="benefit-icon" />
                <span>Custom Solutions</span>
              </div>
              <div className="benefit-item">
                <CheckCircleOutlined className="benefit-icon" />
                <span>Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
