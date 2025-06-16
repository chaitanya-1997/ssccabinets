import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Residential Millwork & Woodwork</h1>
        <p>We prioritize timely execution and pay meticulous attention to details to ensure your satisfaction.</p>
        <button className="cta-button">Get Free Estimate</button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;