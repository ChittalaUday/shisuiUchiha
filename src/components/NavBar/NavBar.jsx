import React from 'react';
import './NavBar.css'; 
import AboutUs from '../AboutUs/AboutUs';
import logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Zenith</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="../AboutUs/AboutUs">Why Zenith?</a>
        </li>
        <li className="dropdown">
          <a href="/services">Services <span></span> </a>
          <ul className="dropdown-menu">
            <li><a href="/services/business-registration">Business Registration</a></li>
            <li><a href="/services/tax-filings">Tax Filings</a></li>
            <li><a href="/services/compliance">Compliance</a></li>
            <li><a href="/services/licenses-and-approvals">Licenses & Approvals</a></li>
            <li><a href="/services/consulting">Consulting</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/resources">Resources <span></span></a>
          <ul className="dropdown-menu">
            <li><a href="/resources/blog">Blog</a></li>
            <li><a href="/resources/faqs">FAQs</a></li>
            <li><a href="/resources/downloads">Downloadable Guides</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/calculators">Calculators<span></span></a>
          <ul className="dropdown-menu">
            <li><a href="/calculators/startup-cost">Startup Cost Calculator</a></li>
            <li><a href="/calculators/income-tax">Income Tax Calculator</a></li>
            <li><a href="/calculators/loan-emi">Loan EMI Calculator</a></li>
            <li><a href="/calculators/profit-margin">Profit Margin Calculator</a></li>
          </ul>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/get-started" className="btn-secondary">Get Started</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
