import React from 'react';
import { motion } from 'framer-motion';
import Myfooter from '../MyHome/Myfooter/Myfooter';
import OurClients from '../OurClients/OurClients';
import OurProducts from '../OurProducts/OurProducts'

const Product = () => {
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
    <>
      <motion.div
      className="my-home"
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      style={{ marginTop: '100px' }}
    >

      <OurClients />
      <OurProducts />
   
     



    </motion.div>
     <Myfooter />
    </>
  
  );
};

export default Product;