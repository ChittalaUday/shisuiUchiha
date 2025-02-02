import React from "react";
import "./Footer.css"; // Optional for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal and Policies Section */}
        <div className="footer-section">
          <h4>Legal & Policies</h4>
          <ul>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for updates and tips.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourBusinessName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
