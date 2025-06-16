import React from 'react';

import { motion } from 'framer-motion';
import Mission from '../Mission/Mission';
import Testimonials from '../Testimonials/Testimonials';
import OurGuarantee from '../OurGuarantee/OurGuarantee';
import Myfooter from '../MyHome/Myfooter/Myfooter';

const Experience = () => {
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
      style={{marginTop: '100px'}}
    >
     
<Mission />
<Testimonials />
<OurGuarantee />
<Myfooter />



    </motion.div>
  );
};

export default Experience;