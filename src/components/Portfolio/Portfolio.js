import React from 'react';
import './Portfolio.css';
import { motion } from 'framer-motion';

const Portfolio = () => {
  // Cabinet colors data
  const cabinetColors = [
    {
      id: 1,
      title: 'Black',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Blue',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Green',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Americano Oak',
      image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      title: 'Espresso',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 6,
      title: 'Light Grey',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 7,
      title: 'Natural',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 8,
      title: 'Slate Grey',
      image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 9,
      title: 'Urban Ash Walnut',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 10,
      title: 'White',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];
  
  // Animation variants
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
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Studio Cabinets Colors in Stock</h2>
        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cabinetColors.map((color) => (
            <motion.div 
              key={color.id} 
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="portfolio-image" style={{ backgroundImage: `url(${color.image})` }}>
                <motion.div 
                  className="portfolio-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="portfolio-info">
                    <h3>{color.title}</h3>
                  </div>
                </motion.div>
              </div>
              <div className="color-title">{color.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;