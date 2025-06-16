
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      client: 'Flawless Orders',
      text: 'Our meticulous quality control process ensures your cabinets arrive exactly as you ordered them.',
      image: 'https://images.pexels.com/photos/16501663/pexels-photo-16501663/free-photo-of-furniture-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      client: 'Durable and Reliable',
      text: 'Built with materials that last, even in high traffic spaces.'
    },
    {
      id: 3,
      client: 'Stress-Free Installation',
      text: 'Clear instructions and universal hardware make assembly simple for everyone.'
    },
    {
      id: 4,
      client: 'Fast Reliable Delivery',
      text: 'We prioritize tranparency and timelessness to keep your projects on track.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <h2 className="section-title1">What we offer</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-text">"{testimonial.text}"</div>
                <div className="testimonial-client">{testimonial.client}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;