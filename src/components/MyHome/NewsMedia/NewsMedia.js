import React from 'react';
import './NewsMedia.css';
import { motion } from 'framer-motion';

const NewsMedia = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Brooklyn Millwork Featured in Design Magazine',
      description: 'Our recent project was highlighted as an example of exceptional craftsmanship and innovative design.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Sustainability Award for Eco-Friendly Practices',
      description: 'Brooklyn Millwork recognized for commitment to sustainable materials and environmentally conscious manufacturing.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'CEO Interview on Craftsmanship Podcast',
      description: 'Listen to our founder discuss the art of millwork and our company\'s dedication to quality and innovation.',
      image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="news-media-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          In The Media
        </motion.h2>
        <motion.div 
          className="news-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {newsItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="news-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <motion.a 
                  href="#" 
                  className="read-more"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Read More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsMedia;