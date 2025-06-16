import React from 'react';
import './HomeAbout.css';
import { motion } from 'framer-motion';

const HomeAbout = () => {
  const stats = [
    { id: 1, number: '15+', label: 'Years Experience' },
    { id: 2, number: '500+', label: 'Projects Completed' },
    { id: 3, number: '50+', label: 'Team Members' }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="About Us" />
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">About Brooklyn Millwork</h2>
            <p>Founded in 2005, Brooklyn Millwork has established itself as a premier provider of custom millwork solutions in New York City and beyond. Our team of skilled craftsmen combines traditional woodworking techniques with modern technology to create exceptional pieces that stand the test of time.</p>
            <p>We pride ourselves on our attention to detail, commitment to quality, and dedication to client satisfaction. From initial concept to final installation, we work closely with architects, designers, and homeowners to bring their vision to life.</p>
            <div className="about-stats">
              {stats.map((stat) => (
                <motion.div 
                  key={stat.id} 
                  className="stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * stat.id, duration: 0.4 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.button 
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;