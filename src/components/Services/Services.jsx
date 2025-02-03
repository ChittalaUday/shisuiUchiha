import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Business Registration',
    services: ['Private Limited Company', 'LLP', 'Sole Proprietorship', 'GST Registration'],
    emoji: '🏢',
  },
  {
    id: 2,
    title: 'Tax Filings',
    services: ['Income Tax', 'GST Returns', 'TDS Filing'],
    emoji: '💰',
  },
  {
    id: 3,
    title: 'Compliance',
    services: ['Annual Filings', 'ROC Compliance'],
    emoji: '✅',
  },
  {
    id: 4,
    title: 'Accounting Services',
    services: ['Bookkeeping', 'Financial Statements'],
    emoji: '📊',
  },
  {
    id: 5,
    title: 'Licenses and Approvals',
    services: ['FSSAI License', 'Trade License', 'Import-Export Code'],
    emoji: '📜',
  },
  {
    id: 6,
    title: 'Consulting',
    services: ['Business Advisory', 'Legal Assistance', 'Startup Guidance'],
    emoji: '💼',
  },
];

const Services = () => {
  const handleCardClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {servicesData.map((category) => (
          <div
            key={category.id}
            className="service-category"
            onClick={() => handleCardClick(category.title)}
          >
            <div className="service-category-image">
              <span role="img" aria-label={category.title} style={{ fontSize: '40px' }}>
                {category.emoji}
              </span>
            </div>
            <div>
              <a className="service-category-title">{category.title}</a>
              <ul className="service-list">
                {category.services.map((service, index) => (
                  <li key={index} className="service-item">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;