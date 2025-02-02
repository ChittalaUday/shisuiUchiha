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
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> contact@yourdomain.com</p>
        <p><strong>Office Location:</strong> 123 Business St, City, Country</p>
      </div>
    </section>
  );
};

export default ContactUs;
