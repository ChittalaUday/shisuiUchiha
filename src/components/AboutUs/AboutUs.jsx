import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  // Step 1: Set up state to track the active section
  const [activeSection, setActiveSection] = useState('mission');

  // Step 2: Handle click events to update the active section
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="about-us-section">
      <h2 className="about-us-heading">About Us</h2>
      
      <div className='about-us-container'>
        <div className='about-us-content'>
        <div >
          <h3
            className={activeSection === 'mission' ? 'active' : ''}
            onClick={() => handleSectionClick('mission')}
          >
            Our Mission
          </h3>
          <h3
            className={activeSection === 'vision' ? 'active' : ''}
            onClick={() => handleSectionClick('vision')}
          >
            Our Vision
          </h3>
          <h3
            className={activeSection === 'story' ? 'active' : ''}
            onClick={() => handleSectionClick('story')}
          >
            Our Story
          </h3>
        </div>

        </div>
        
        <div className='about-us-description'>
          {activeSection === 'mission' && (
            <div>
              <h4>Our Mission</h4>
              <p>We strive to make the world a better place through innovation and dedication.</p>
              <img src="mission-image.jpg" alt="Our Mission" />
            </div>
          )}
          {activeSection === 'vision' && (
            <div>
              <h4>Our Vision</h4>
              <p>To be a global leader in technology solutions, empowering individuals and businesses.</p>
              <img src="vision-image.jpg" alt="Our Vision" />
            </div>
          )}
          {activeSection === 'story' && (
            <div>
              <h4>Our Story</h4>
              <p>Founded in 2010, we have grown from a small startup to an industry leader.</p>
              <img src="story-image.jpg" alt="Our Story" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
