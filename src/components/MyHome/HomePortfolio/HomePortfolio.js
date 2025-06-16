import React from 'react';
import './HomePortfolio.css';
import { motion } from 'framer-motion';

const HomePortfolio = () => {
  const portfolioItems = Array.from({ length: 6 }).map((_, index) => ({
    id: index + 1,
    title: `Project Title ${index + 1}`,
    category: 'Category',
    image: `https://images.unsplash.com/photo-160055${index + 1}0000-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`
  }));

  const categories = ['All', 'Residential', 'Commercial', 'Custom Furniture'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="portfolio-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>
        
        <motion.div 
          className="portfolio-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button 
              key={index} 
              className={`portfolio-category ${index === 0 ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <img src={item.image} alt={item.title} />
              <motion.div 
                className="portfolio-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <motion.a 
                    href="#" 
                    className="view-project"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomePortfolio;