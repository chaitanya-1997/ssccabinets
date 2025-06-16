import React, { useState } from 'react';
import './OurGuarantee.css';
import { motion } from 'framer-motion';
import { FiShield , FiSmile,FiX } from 'react-icons/fi';

import img1 from './img/garent1.png';
import img2 from './img/garent2.png';
import img3 from './img/garent3.png';

const OurGuarantee = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

const modals = {
  ourGuarantee: {
    title: 'Our Guarantee',
    icon: <FiShield />,
    content: (
      <>
        <p>By listening to our customers, we ensure Studio Signature Cabinets delivers affordable elegance that exceeds expectations.</p>
        <p>Our guarantee is built on trust, responsiveness, and a deep understanding of your needs. We don’t just provide cabinets—we deliver a refined experience where style meets functionality and budget.</p>
        <p>Whether it’s through personalized design consultations, quality craftsmanship, or attentive post-sale support, we stand behind every product and promise complete satisfaction.</p>
        <p>When you choose Studio Signature Cabinets, you’re choosing a partner that puts your vision first-every time.</p>
      </>
    ),
  },
  satisfaction: {
    title: '100% Satisfaction',
    icon: <FiSmile />,
    content: (
      <>
        <p>Your satisfaction is our top priority. We work closely with you at every stage of the project to ensure the final result not only meets but exceeds your expectations.</p>
        <p>From the initial consultation to final installation, we emphasize open communication, responsiveness, and flexibility. Our dedicated team is here to listen, adapt, and deliver exactly what you envision—down to the finest detail.</p>
        <p>We welcome feedback throughout the process and actively seek input to fine-tune every element of your project. This customer-first approach is how we’ve built lasting relationships and consistently earned repeat business and referrals.</p>
        <p>At Studio Signature Cabinets, satisfaction isn’t a promise - it’s a guarantee.</p>
      </>
    ),
  },
};


  return (
    <section className="guarantee-section">
      <div className="container">
        {/* First row with two columns */}
        <div className="guarantee-content">
          {/* Left column with slogan and image */}
          <motion.div
            className="guarantee-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="guarantee-text">
              <h2 className="section-title">Our Guarantee</h2>
              <p>
                By Listening to our customers, we ensure Studio Signature Cabinets delivers affordable elegance that exceeds expectations
              </p>
              <motion.button
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(modals.ourGuarantee)}
              >
                Learn More
              </motion.button>
            </div>
            <motion.div 
              className="guarantee-image"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={img1} alt="Quality Craftsmanship" />
            </motion.div>
          </motion.div>
          
          {/* Right column with image and slogan */}
          <motion.div
            className="guarantee-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="guarantee-image"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={img2} alt="Customer Satisfaction" />
            </motion.div>
            <div className="guarantee-text">
              <h2 className="section-title">100% Satisfaction</h2>
              <p>
                Your satisfaction is our top priority. We work closely with you at every
                stage of the project to ensure the final result not only meets but
                exceeds your expectations.
              </p>
              <motion.button
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(modals.satisfaction)}
              >
                Our Process
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Second row with full-width image */}
        <motion.div 
          className="guarantee-full-image"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={img3} alt="Our Guarantee" />
          <motion.div 
            className="guarantee-overlay"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3>Craftsmanship Guaranteed</h3>
            <p>At Studio Signature Cabinets, we understand that not all cabinetry solutions are created equal. Here's what sets us apart.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <FiX />
            </button>
            {modalContent.icon && (
              <div className="modal-header-icon">
                {modalContent.icon}
              </div>
            )}
            <h2>{modalContent.title}</h2>
            <div className="modal-content-container">
              {modalContent.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurGuarantee;