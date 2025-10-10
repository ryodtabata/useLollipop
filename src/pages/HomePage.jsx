import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StarOutlined,
  RocketOutlined,
  MobileOutlined,
  LaptopOutlined,
  GlobalOutlined,
  SettingOutlined,
  AimOutlined,
  MessageOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  BgColorsOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import image1 from '../image1.jpeg';
import image2 from '../iamge2.webp';

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="page-container">
      {/* Animated Background Particles */}
      <div className="particles-background">
        {[...Array(50)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 5}`}></div>
        ))}
      </div>

      {/* Floating Cursor Effect */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      ></div>

      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <div className="title-wrapper">
            <StarOutlined className="title-accent" />
            <h1 className="animated-title">
              Every Brand Needs an
              <span className="gradient-text"> Online Presence!</span>
            </h1>
          </div>

          <p className="hero-description typewriter">
            We create <strong>stunning websites</strong> that work flawlessly on
            all devices
          </p>

          <div className="services-highlight glass-effect">
            <div className="services-header">
              <RocketOutlined className="services-icon" />
              <h2>We Do Everything Digital</h2>
            </div>
            <div className="services-grid-fancy">
              <div className="service-item">
                <MobileOutlined className="service-icon" />
                <span>Mobile Apps</span>
              </div>
              <div className="service-item">
                <LaptopOutlined className="service-icon" />
                <span>Websites</span>
              </div>
              <div className="service-item">
                <GlobalOutlined className="service-icon" />
                <span>Web Applications</span>
              </div>
              <div className="service-item">
                <SettingOutlined className="service-icon" />
                <span>Backend Systems</span>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3 className="cta-title">
              <span className="highlight-text">We Want to Meet</span> and Design
              Perfectly to Your Needs!
            </h3>
            <div className="button-group">
              <button
                className="cta-button primary-btn"
                onClick={() => navigate('/get-started')}
              >
                <AimOutlined />
                Get Started Today
              </button>
              <button
                className="cta-button secondary-btn"
                onClick={() => navigate('/free-consultation')}
              >
                <MessageOutlined />
                Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="image-container floating-card">
            <img
              src={image1}
              alt="Web Development Services"
              className="hero-image"
            />
          </div>
          <div className="image-container floating-card delayed">
            <img
              src={image2}
              alt="Mobile App Development"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <StarOutlined className="section-accent" />
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Excellence in every pixel, performance in every click
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card premium-card">
            <CheckCircleOutlined className="feature-icon" />
            <h3>Responsive Design</h3>
            <p>
              Pixel-perfect experiences across all devices - mobile, tablet, and
              desktop
            </p>
            <div className="feature-stats">
              <span className="stat">100% Mobile Optimized</span>
            </div>
          </div>

          <div className="feature-card premium-card">
            <DollarCircleOutlined className="feature-icon" />
            <h3>Affordable Excellence</h3>
            <p>
              Premium quality development services at transparent, competitive
              pricing
            </p>
            <div className="feature-stats">
              <span className="stat">No Hidden Fees</span>
            </div>
          </div>

          <div className="feature-card premium-card">
            <BgColorsOutlined className="feature-icon" />
            <h3>Custom Solutions</h3>
            <p>
              Designs tailored to your unique business requirements and brand
              identity
            </p>
            <div className="feature-stats">
              <span className="stat">100% Custom Code</span>
            </div>
          </div>

          <div className="feature-card premium-card">
            <ThunderboltOutlined className="feature-icon" />
            <h3>Full-Stack Mastery</h3>
            <p>
              Complete end-to-end development from stunning frontends to robust
              backend systems
            </p>
            <div className="feature-stats">
              <span className="stat">Lightning Fast</span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Watermark Footer */}
      <footer className="professional-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="company-info">
              <h4>Lollipop Digital Solutions</h4>
              <p>Crafting Digital Excellence Since 2024</p>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="watermark">
              <div className="watermark-date">{currentDate}</div>
              <div className="watermark-text">
                © {currentYear} Lollipop Digital Solutions
              </div>
              <div className="watermark-tagline">Innovating Tomorrow</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="tech-stack">
            <span>Powered by React • Node.js • Modern Web Technologies</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
