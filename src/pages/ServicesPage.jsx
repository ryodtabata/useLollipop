import React from 'react';

const ServicesPage = () => {
  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <p>Explore the range of services we provide.</p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Custom web applications built with modern technologies.</p>
        </div>

        <div className="service-card">
          <h3>Mobile Apps</h3>
          <p>Native and cross-platform mobile applications.</p>
        </div>

        <div className="service-card">
          <h3>Consulting</h3>
          <p>Technical consulting and strategic planning services.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
