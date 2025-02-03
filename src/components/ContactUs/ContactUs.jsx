import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    alert('Message sent successfully!');
  };

  return (
    <section className="contact-us-section">
      <h2 className="contact-us-heading">Contact Us</h2>
      <div className="contact-us-container">
        <div className="contact-info">
          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-card">
            <h3>✉️ Email</h3>
            <p>contact@yourdomain.com</p>
          </div>
          <div className="contact-card">
            <h3>📍 Office Location</h3>
            <p>123 Business St, City, Country</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;