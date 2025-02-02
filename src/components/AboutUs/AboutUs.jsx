import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-us-content">
        <div className="about-us-mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide seamless business registration, tax filing, and compliance solutions for businesses of all sizes. We aim to simplify processes and deliver exceptional results to our clients.
          </p>
        </div>
        <div className="about-us-vision">
          <h3>Our Vision</h3>
          <p>
            We envision being the leading service provider in business solutions, empowering entrepreneurs with the tools they need to grow and succeed in a competitive world.
          </p>
        </div>
        <div className="about-us-story">
          <h3>Our Story</h3>
          <p>
            Started as a small team of passionate professionals, we have grown into a trusted name in the industry. With years of experience and a deep understanding of business needs, we've helped thousands of clients navigate complex legal and financial landscapes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
