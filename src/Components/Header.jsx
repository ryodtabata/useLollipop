import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  AppstoreOutlined,
  BookOutlined,
  TeamOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import './Header.css';

// Custom Lollipop SVG Icon Component
const LollipopIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '24px', height: '24px' }}
  >
    {/* Lollipop stick */}
    <rect
      x="47"
      y="55"
      width="6"
      height="40"
      rx="3"
      fill="currentColor"
      opacity="0.8"
    />

    {/* Main candy circle */}
    <circle
      cx="50"
      cy="35"
      r="25"
      fill="url(#lollipopGradient)"
      stroke="currentColor"
      strokeWidth="2"
    />

    {/* Swirl pattern */}
    <path
      d="M35 35 Q45 25, 55 35 Q65 45, 55 55 Q45 65, 35 55 Q25 45, 35 35"
      fill="none"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Inner swirl */}
    <path
      d="M40 35 Q47 30, 54 35 Q60 40, 54 45 Q47 50, 40 45 Q34 40, 40 35"
      fill="none"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Highlight */}
    <ellipse
      cx="42"
      cy="28"
      rx="6"
      ry="4"
      fill="rgba(255,255,255,0.3)"
      transform="rotate(-20 42 28)"
    />

    <defs>
      <linearGradient id="lollipopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="33%" stopColor="#4ecdc4" />
        <stop offset="66%" stopColor="#45b7d1" />
        <stop offset="100%" stopColor="#96ceb4" />
      </linearGradient>
    </defs>
  </svg>
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    navigate(`/${page}`);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '', label: 'Home', icon: <HomeOutlined /> },
    { path: 'about', label: 'About Us', icon: <TeamOutlined /> },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section" onClick={() => handleNavigation('')}>
          <div className="logo-wrapper">
            <div className="logo-icon">
              <LollipopIcon className="lollipop-icon" />
            </div>
            <div className="logo-text">
              <h1 className="logo-title">Lollipop</h1>
              <span className="logo-subtitle">Digital Solutions</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="navigation desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`nav-button ${
                location.pathname === `/${item.path}` ||
                (item.path === '' &&
                  (location.pathname === '/' || location.pathname === '/home'))
                  ? 'active'
                  : ''
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}

          <div className="cta-container">
            <button
              className="cta-header-btn"
              onClick={() => handleNavigation('get-started')}
            >
              Get Started Today
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <button
                key={item.path}
                className={`mobile-nav-button ${
                  location.pathname === `/${item.path}` ||
                  (item.path === '' &&
                    (location.pathname === '/' ||
                      location.pathname === '/home'))
                    ? 'active'
                    : ''
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-label">{item.label}</span>
              </button>
            ))}

            <div className="mobile-cta-container">
              <button
                className="mobile-cta-btn"
                onClick={() => handleNavigation('get-started')}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
