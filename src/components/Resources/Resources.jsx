import React from "react";
import { FaBookOpen, FaQuestionCircle, FaFileDownload } from "react-icons/fa";
import "./Resources.css";

const resourcesData = [
  {
    id: 1,
    title: "Blog",
    description: "📖 Explore articles on tax, compliance, and business tips.",
    link: "/blog",
    icon: <FaBookOpen />,
  },
  {
    id: 2,
    title: "FAQs",
    description: "❓ Find answers to common questions regarding our services.",
    link: "/faqs",
    icon: <FaQuestionCircle />,
  },
  {
    id: 3,
    title: "Downloadable Guides",
    description: "📂 Download e-books & templates for business & tax filing.",
    link: "/downloads",
    icon: <FaFileDownload />,
  },
];

const Resources = () => {
  return (
    <section className="resources-section">
      <h2 className="resources-heading">Resources</h2>
      <div className="resources-container">
        {resourcesData.map((resource) => (
          <div key={resource.id} className="resource-card">
            <div className="resource-icon">{resource.icon}</div>
            <h3 className="resource-title">{resource.title}</h3>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.link} className="resource-link">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
