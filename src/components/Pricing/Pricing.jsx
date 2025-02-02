import React from 'react';
import './Pricing.css';

const pricingData = [
  {
    id: 1,
    plan: 'Basic',
    price: '$199',
    features: ['Business Registration', 'GST Registration', 'Basic Tax Filing'],
  },
  {
    id: 2,
    plan: 'Standard',
    price: '$499',
    features: ['Everything in Basic', 'Advanced Tax Filing', 'Annual Compliance'],
  },
  {
    id: 3,
    plan: 'Premium',
    price: '$999',
    features: ['Everything in Standard', 'Consulting', 'Complete Accounting Services'],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-heading">Our Pricing</h2>
      <div className="pricing-container">
        {pricingData.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h3 className="pricing-plan">{plan.plan}</h3>
            <p className="pricing-price">{plan.price}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="pricing-cta">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
