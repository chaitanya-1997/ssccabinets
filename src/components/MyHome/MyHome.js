import React from 'react';
import './MyHome.css';
import { motion } from 'framer-motion';

// Import all the separate components
import HeroSlider from './HeroSlider/HeroSlider';
import TrustedBy from './TrustedBy/TrustedBy';
import OneStop from './OneStop/OneStop';
import NewsMedia from './NewsMedia/NewsMedia';
import HomePortfolio from './HomePortfolio/HomePortfolio';
import HomeAbout from './HomeAbout/HomeAbout';
import Questions from './Questions/Questions';
import Myfooter from './Myfooter/Myfooter';

const MyHome = () => {
  // Animation variants for page sections
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="my-home"
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      {/* Hero Slider Component */}
      <HeroSlider />

      {/* Trusted By Component */}
      {/* <TrustedBy /> */}
      
      {/* One Stop Solution Component */}
      <OneStop />
      

   {/* Questions Component */}
   <Questions />

   {/* Our Guarantee Component */}
 

      {/* News Media Component */}
      {/* <NewsMedia /> */}
      
      {/* Portfolio Component */}
      {/* <HomePortfolio /> */}
      
      {/* About Component */}
      {/* <HomeAbout /> */}
      
   
   
      {/* Footer Component */}
  <Myfooter />

    </motion.div>
  );
};

export default MyHome;