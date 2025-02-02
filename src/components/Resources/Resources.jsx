import React from 'react';
import './Resources.css';

const resourcesData = [
  {
    id: 1,
    title: 'Blog',
    description: 'Explore articles on tax, compliance, and business tips.',
    link: '/blog',
  },
  {
    id: 2,
    title: 'FAQs',
    description: 'Find answers to common questions regarding our services.',
    link: '/faqs',
  },
  {
    id: 3,
    title: 'Downloadable Guides',
    description: 'Download e-books and templates for business registration and tax filing.',
    link: '/downloads',
  },
];

const Resources = () => {
  return (
    <section className="resources-section">
      <h2 className="resources-heading">Resources</h2>
      <div className="resources-container">
        {resourcesData.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h3 className="resource-title">{resource.title}</h3>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.link} className="resource-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
