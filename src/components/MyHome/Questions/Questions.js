import React from 'react';
import './Questions.css';
import { motion } from 'framer-motion';

import img from './onestop4.jpg'
import { useNavigate } from "react-router-dom";

const Questions = () => {
     const navigate = useNavigate();
  return (
    <section className="questions-section">
      <div className="container">
        <div className="questions-content">
          <motion.div
            className="questions-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Have Any Questions?</h2>
            <p>
              We're here to help you with any inquiries about our millwork services, custom designs, or project requirements. 
              Our team of experts is ready to provide you with the information you need to make informed decisions for your next project.
            </p>
            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contactus")}
            >
              Contact Us
            </motion.button>
          </motion.div>
          <motion.div
            className="questions-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={img} alt="Customer Support" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Questions;