import React, { useState } from 'react';
import './ClientPortal.css';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Handle login (for now, we'll simulate login by toggling the state)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <section className="client-portal-section">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Client Login</h2>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="login-input"
            required
          />
          <button onClick={handleLogin} className="login-btn">
            Login
          </button>
        </div>
      ) : (
        <div className="client-dashboard">
          <h2>Welcome, {username}!</h2>
          <p>Here, you can track your filings, upload documents, and more.</p>
          <div className="dashboard-actions">
            <button className="dashboard-btn">View Filings</button>
            <button className="dashboard-btn">Upload Documents</button>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientPortal;
