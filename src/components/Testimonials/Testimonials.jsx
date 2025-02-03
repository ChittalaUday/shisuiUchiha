import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonialsData = [
  { id: 1, name: "John Doe", feedback: "🔥 The team provided exceptional service! Absolutely hassle-free. 🙌", designation: "Founder, TechCorp" },
  { id: 2, name: "Jane Smith", feedback: "💰 Highly professional and affordable. They saved us a lot of time! ⏳", designation: "CEO, Innovate Inc." },
  { id: 3, name: "Michael Lee", feedback: "🚀 Their expertise is unmatched. I recommend them to all entrepreneurs! 💡", designation: "Owner, Startup Solutions" },
  { id: 4, name: "Emily Davis", feedback: "💯 Fantastic service and support throughout the entire process. 🤝", designation: "Manager, Business Solutions" },
  { id: 5, name: "David Wilson", feedback: "✨ They went above and beyond to ensure our satisfaction. 👏", designation: "Director, Creative Agency" },
  { id: 6, name: "Sarah Brown", feedback: "✅ Professional, efficient, and highly recommended! 🌟", designation: "CEO, Marketing Experts" },
];


const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (sliderContainerRef.current) {
        const width = sliderContainerRef.current.offsetWidth;
        if (width < 500) setSlidesToShow(1);
        else if (width < 900) setSlidesToShow(2);
        else if(width<1200) setSlidesToShow(3);
        else setSlidesToShow(4);
      }
    };

    const observer = new ResizeObserver(updateSlidesToShow);
    if (sliderContainerRef.current) observer.observe(sliderContainerRef.current);

    updateSlidesToShow(); // Initial setup

    return () => observer.disconnect();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials-section" ref={sliderContainerRef}>
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h3>{testimonial.name}</h3>
            <p className="testimonial-designation">{testimonial.designation}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
