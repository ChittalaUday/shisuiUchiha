import React, { useState } from 'react';
import './AboutUs.css';
import storyImage from '../../assets/about-us/story.png';
import missionImage from '../../assets/about-us/mission.png';
import visionImage from '../../assets/about-us/vision.png';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="about-us-section">
      <h2 className="about-us-heading">About Us</h2>

      <div className='about-us-container'>
        {activeSection === 'mission' && (
          <img src={missionImage} alt="Our Mission" />
        )}
        {activeSection === 'vision' && (
          <img src={visionImage} alt="Our Vision" />
        )}
        {activeSection === 'story' && (
          <img src={storyImage} alt="Our Story" />
        )}

        <div className='about-us-description-container'>  
          <div className='about-us-content'>
            <a
              className={activeSection === 'mission' ? 'active' : ''}
              onClick={() => handleSectionClick('mission')}
            >
              Our Mission
            </a>
            <a
              className={activeSection === 'vision' ? 'active' : ''}
              onClick={() => handleSectionClick('vision')}
            >
              Our Vision
            </a>
            <a
              className={activeSection === 'story' ? 'active' : ''}
              onClick={() => handleSectionClick('story')}
            >
              Our Story
            </a>
          </div>

          <div className='about-us-description'>
            {activeSection === 'mission' && (
              <div>
                <p>🚀 At [Your Company Name], our mission is to provide expert tax consultation and financial solutions to individuals and businesses. We aim to simplify the complexities of taxation, ensuring compliance while maximizing financial benefits.</p>
                <p>💼 Our dedicated team works tirelessly to stay updated with the latest tax laws and regulations, ensuring that our clients receive the best possible advice and support. We believe in building long-term relationships based on trust and transparency.</p>
                <p>🌟 By leveraging technology and innovation, we strive to make tax consultation more accessible and efficient for everyone. Our mission is to empower our clients to achieve their financial goals with confidence and peace of mind.</p>
              </div>
            )}
            {activeSection === 'vision' && (
              <div>
                <p>🔮 We envision becoming the most trusted and innovative tax consultancy firm, helping clients navigate tax laws with confidence and ease, while fostering financial growth and stability.</p>
                <p>🌍 Our vision is to create a world where tax compliance is seamless and stress-free. We aim to be the go-to resource for individuals and businesses seeking expert tax advice and financial planning.</p>
                <p>🏆 Through continuous improvement and a commitment to excellence, we aspire to set new standards in the tax consultancy industry. Our vision is to be recognized as leaders in our field, known for our integrity, expertise, and client-centric approach.</p>
              </div>
            )}
            {activeSection === 'story' && (
              <div>
                <p>📖 Founded in [Year], [Your Company Name] started as a small consultancy firm dedicated to helping individuals and businesses with their tax and financial needs. Over the years, we have grown into a well-respected firm, serving thousands of clients with integrity and expertise.</p>
                <p>👥 Our team consists of experienced tax professionals, accountants, and financial advisors who are committed to delivering personalized solutions tailored to each client’s unique situation. We take pride in our collaborative approach and our ability to adapt to the ever-changing financial landscape.</p>
                <p>🏢 From our humble beginnings to our current status as industry leaders, our story is one of dedication, growth, and unwavering commitment to our clients. We look forward to continuing our journey and helping more clients achieve their financial goals.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;