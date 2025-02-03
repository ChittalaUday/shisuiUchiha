import React, { useState } from 'react';
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
    {
      id: 4,
      name: 'Emily Davis',
      feedback: 'Fantastic service and support throughout the entire process.',
      designation: 'Manager, Business Solutions',
    },
    {
      id: 5,
      name: 'David Wilson',
      feedback: 'They went above and beyond to ensure our satisfaction.',
      designation: 'Director, Creative Agency',
    },
    {
      id: 6,
      name: 'Sarah Brown',
      feedback: 'Professional, efficient, and highly recommended.',
      designation: 'CEO, Marketing Experts',
    },
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials((prev) => prev + 3);
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.slice(0, visibleTestimonials).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-designation">{testimonial.designation}</p>
          </div>
        ))}
      </div>
      {visibleTestimonials < testimonialsData.length && (
        <button className="load-more-btn" onClick={loadMoreTestimonials}>
          Load More
        </button>
      )}
    </section>
  );
};

export default Testimonials;