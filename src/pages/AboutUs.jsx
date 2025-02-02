import React from 'react';
import '../styles/global.css'; // Import the global CSS for styles

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header className="about-header">
        <h1>About Us 🌟</h1>
        <p>Learn more about our journey, mission, and vision. 🚀</p>
      </header>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission 🎯</h2>
          <p>
            Our mission is to deliver exceptional services that empower our clients to achieve their goals with confidence.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision 🌍</h2>
          <p>
            To be a globally recognized brand known for excellence, innovation, and customer-centric solutions.
          </p>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team 👩‍💼👨‍💼</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Team Member 3" />
            <h3>Emily Davis</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="history">
        <h2>Our History 📜</h2>
        <p>
          Founded in [Year], we have grown from a small startup to a leading provider of innovative
          solutions across the globe. 🌏 Our commitment to excellence has been the cornerstone of our success.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
