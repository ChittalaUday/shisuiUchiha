import React from 'react';
import './WhyChooseUs.css';

const benefitsData = [
  {
    id: 1,
    title: 'Affordability',
    description: 'We offer competitive pricing that ensures value for money without compromising on quality.',
    icon: '💰',
  },
  {
    id: 2,
    title: 'Expertise',
    description: 'Our team of professionals has years of experience in business registration, tax filings, and compliance.',
    icon: '🎓',
  },
  {
    id: 3,
    title: 'Customer Support',
    description: 'We offer 24/7 customer support to address any concerns and assist you with your needs.',
    icon: '🤝',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <h2 className="why-choose-us-heading">Why Choose Us</h2>
      <div className="benefits-container">
        {benefitsData.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
