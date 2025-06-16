import React from 'react';
import './HomeProjects.css';
import { motion } from 'framer-motion';

const HomeProjects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Renovation',
      category: 'Residential',
      image: 'https://via.placeholder.com/400x300',
      description: 'Custom cabinetry and millwork for a luxury home kitchen.'
    },
    {
      id: 2,
      title: 'Corporate Office Fit-Out',
      category: 'Commercial',
      image: 'https://via.placeholder.com/400x300',
      description: 'Complete millwork package for a Manhattan office space.'
    },
    {
      id: 3,
      title: 'Boutique Retail Display',
      category: 'Retail',
      image: 'https://via.placeholder.com/400x300',
      description: 'Custom display units and fixtures for a high-end retailer.'
    },
    {
      id: 4,
      title: 'Historic Building Restoration',
      category: 'Restoration',
      image: 'https://via.placeholder.com/400x300',
      description: 'Detailed woodwork restoration for a landmark building.'
    }
  ];

  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="home-projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <motion.a 
                  href="#" 
                  className="view-project-link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="view-all-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <a href="/projects" className="view-all-button">View All Projects</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProjects;