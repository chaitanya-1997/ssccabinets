import React, { useState } from 'react';
import './OneStop.css';
import { motion } from 'framer-motion';
import img1 from './img/onestop1.png';
import img2 from './img/onetop2.jpeg';
import img3 from './img/onetop3.png';
import { FiUsers, FiAward, FiCheckCircle } from 'react-icons/fi';

const OneStop = () => {
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
  customerCentric: {
    title: 'Customer Centric Approach',
    icon: <FiUsers />,
    content: (
      <>
        <p>We prioritize strong client relationships and delivering solutions tailored to your project’s unique requirements, ensuring satisfaction every step of the way.</p>
        <p>Our approach is built on active listening, transparent communication, and collaborative problem-solving. From the initial consultation to post-project support, we ensure that every interaction adds value to your experience.</p>
        <p>By deeply understanding your goals, challenges, and vision, we create custom strategies that deliver real results. Our team is committed to being responsive, flexible, and proactive—so your needs are not just met, but exceeded.</p>
      </>
    ),
  },
  curatedPortfolio: {
    title: 'Curated Portfolio',
    icon: <FiAward />,
    content: (
      <>
        <p>In addition to our exclusive line, we are proudly partnered with Cabinetworks Group, one of the largest and most trusted cabinet manufacturers in North America.</p>
        <p>This partnership allows us to offer a diverse and curated portfolio of high-quality cabinetry solutions—from classic styles to modern innovations—catering to a wide range of customer preferences and project needs.</p>
        <p>Each product is hand-selected to meet our quality standards, ensuring that design, durability, and functionality come together in every installation. Whether you're outfitting a single space or managing a large-scale project, our portfolio provides the flexibility and premium finish you expect.</p>
      </>
    ),
  },
  qualityAssurance: {
    title: 'Unmatched Quality Assurance',
    icon: <FiCheckCircle />,
    content: (
      <>
        <p>Our commitment to minimizing shipping damages and preventing order errors ensures a smoother, more reliable experience for our customers.</p>
        <p>We follow a stringent quality assurance process at every stage—from product inspection and secure packaging to double-checking order accuracy before dispatch. This proactive approach significantly reduces rework, delays, and customer frustration.</p>
        <p>Every product is backed by our focus on consistency, precision, and accountability. Through routine audits, process optimization, and employee training, we maintain a zero-compromise policy when it comes to quality.</p>
        <p>The result? Greater customer trust, fewer disruptions, and enhanced long-term satisfaction.</p>
      </>
    ),
  },
};


  return (
    <section className="one-stop-section">
      <div className="container">
        <div className="one-stop-content">
          <motion.div
            className="one-stop-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Customer Centric Approach</h2>
            <p>
              We prioritize strong client relationships and delivering solutions tailored to your project's unique requirements, ensuring satisfaction every step of the way.
            </p>
            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(modals.customerCentric)}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div
            className="one-stop-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={img1} alt="Millwork Workshop" />
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '50px' }}>
        <div className="one-stop-content">
          <motion.div
            className="one-stop-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={img2} alt="Millwork Workshop" />
          </motion.div>
          <motion.div
            className="one-stop-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Curated Portfolio</h2>
            <p>
              In addition to our exclusive line, we are proudly partnered with Cabinetworks Group.
            </p>
            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(modals.curatedPortfolio)}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '50px' }}>
        <div className="one-stop-content">
          <motion.div
            className="one-stop-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Unmatched Quality Assurance</h2>
            <p>
              Our commitment to minimizing shipping damages and preventing order errors ensures a smoother, more reliable experience for our customers.
            </p>
            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(modals.qualityAssurance)}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div
            className="one-stop-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={img3} alt="Millwork Workshop" />
          </motion.div>
        </div>
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header-icon">
              {React.cloneElement(modalContent.icon, { size: 50 })}
            </div>
            <h2>{modalContent.title}</h2>
            <div className="modal-content-container">
              {modalContent.content}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default OneStop;