import React from 'react';
import CountUp from 'react-countup';
import './Stats.css';

const Stats = () => {
  const statsData = [
    { id: 1, value: 150, suffix: '+ 👥', label: 'Clients Served' },
    { id: 2, value: 500, suffix: '+ 📄', label: 'Filings Completed' },
    { id: 3, value: 20, suffix: '+ 🕰️', label: 'Years of Experience' },
    { id: 4, value: 100, suffix: '% 😊', label: 'Customer Satisfaction' },
  ];

  return (
    <section className="stats-section">
      <h2 className="stats-heading">Our Achievements</h2>
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-card">
            <p className="stat-value">
              <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
            </p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;