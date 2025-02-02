import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Business Registration',
    services: ['Private Limited Company', 'LLP', 'Sole Proprietorship', 'GST Registration'],
  },
  {
    id: 2,
    title: 'Tax Filings',
    services: ['Income Tax', 'GST Returns', 'TDS Filing'],
  },
  {
    id: 3,
    title: 'Compliance',
    services: ['Annual Filings', 'ROC Compliance'],
  },
  {
    id: 4,
    title: 'Accounting Services',
    services: ['Bookkeeping', 'Financial Statements'],
  },
  {
    id: 5,
    title: 'Licenses and Approvals',
    services: ['FSSAI License', 'Trade License', 'Import-Export Code'],
  },
  {
    id: 6,
    title: 'Consulting',
    services: ['Business Advisory', 'Legal Assistance', 'Startup Guidance'],
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {servicesData.map((category) => (
          <div key={category.id} className="service-category">
            <h3 className="service-category-title">{category.title}</h3>
            <ul className="service-list">
              {category.services.map((service, index) => (
                <li key={index} className="service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
