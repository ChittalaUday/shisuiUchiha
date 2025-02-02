import React from 'react';
import './HeroSection.css';
import heroImg from '../../assets/hero-grow-up.svg';

const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>Grow Your Business,</h1>
        <h1>Not Your Worries.</h1>
        <p>We handle the complexities of business operations so you can focus on what matters most. </p>
        <div className="hero-cta">
          <button className="cta-btn primary-btn">Know More</button>
          <button className="cta-btn secondary-btn">Contact Us</button>
        </div>

      </div>

      <img src={heroImg} alt="hero" className="hero-img" />
    </main>
  );
};

export default HeroSection;
