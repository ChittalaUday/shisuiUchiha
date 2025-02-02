import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'The team provided exceptional service and made the process hassle-free.',
      designation: 'Founder, TechCorp',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Highly professional and affordable. They saved us a lot of time!',
      designation: 'CEO, Innovate Inc.',
    },
    {
      id: 3,
      name: 'Michael Lee',
      feedback: 'Their expertise is unmatched. I recommend them to all entrepreneurs.',
      designation: 'Owner, Startup Solutions',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-designation">{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
