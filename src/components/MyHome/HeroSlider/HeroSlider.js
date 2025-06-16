import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

import hero1 from './herosliderimg/heroslid1a.jpeg'
import hero2 from './herosliderimg/heroslid2a.jpeg'
import hero3 from './herosliderimg/heroslid3a.jpeg'
import hero4 from './herosliderimg/heroslid4a.jpeg'

const HeroSlider = () => {
  // State for hero slider
   const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      image: hero1,
      title: 'Affordable Elegance for every home',
      // description: 'Crafting excellence in every detail for residential and commercial projects',
    },
    {
  image: hero2,
        title: 'More than just Cabinets',
      // description: 'Bespoke designs tailored to your unique vision and space',
    },
    {
  image: hero3,
        title: 'When You Choose Studio Signature Cabinets',
      // description: 'Bringing together tradition and innovation for exceptional results',
    },

    {
  image: hero4,
        title: 'You are Choosing More than just Cabinets you are Choosing Peace of Mind',
      // description: 'Bringing together tradition and innovation for exceptional results',
    },
  ];

  // Auto slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <section className="hero-slider" >
      <div className="slides-container">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="slide-overlay"></div>
            <motion.div
              className="slide-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: index === currentSlide ? 0 : 50, opacity: index === currentSlide ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
           <motion.button
      className="cta-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/contactus")}
    >
      Contact-Us
    </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="slider-controls">
        <motion.button
          className="prev-btn"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-chevron-left"></i>
        </motion.button>
        <div className="slider-dots">
          {heroSlides.map((_, index) => (
            <motion.span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            ></motion.span>
          ))}
        </div>
        <motion.button
          className="next-btn"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-chevron-right"></i>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSlider;