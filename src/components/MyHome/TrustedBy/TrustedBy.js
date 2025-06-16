import React from 'react';
import './TrustedBy.css';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const clients = [
    { id: 1, name: 'The Corcoran Group' },
    { id: 2, name: 'Bank of America' },
    { id: 3, name: 'VU Condominiums' },
    { id: 4, name: 'Venmo' },
    { id: 5, name: 'WeWork' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="clients-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Trusted By
        </motion.h2>
        <motion.div 
          className="clients-logos"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          {clients.map((client) => (
            <motion.div 
              key={client.id} 
              className="client-logo"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {client.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;