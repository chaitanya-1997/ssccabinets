// import React from 'react';
// import './Mission.css';
// import { motion } from 'framer-motion';

// const Mission = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   // SERVICE acronym data
//   const serviceValues = [
//     {
//       letter: 'S',
//       title: 'olutions:',
//       description: 'Offering innovative and tailored cabinetry options to meet every client\'s unique needs.'
//     },
//     {
//       letter: 'E',
//       title: 'xcellence:',
//       description: 'We strive for excellence in every aspect of our work.'
//     },
//     {
//       letter: 'R',
//       title: 'eliability:',
//       description: 'Dependable and accurate from design to delivery.'
//     },
//     {
//       letter: 'V',
//       title: 'alue:',
//       description: 'We create lasting value for our customers and communities.'
//     },
//     {
//       letter: 'I',
//       title: 'nnovation:',
//       description: 'We are continuously improving and innovating our solutions.'
//     },
//     {
//       letter: 'C',
//       title: 'ustomer Service:',
//       description: 'Providing unparalleled customer service is our priority.'
//     },
//     {
//       letter: 'E',
//       title: 'mployee Development:',
//       description: 'We prioritize the growth and learning of our team members.'
//     }
//   ];

//   return (
//     <section id="mission" className="mission-section">
//       <div className="container">
      
        
//         <div className="mission-content">
//           <motion.div 
//             className="mission-statement"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.7 }}
//           >
//             <p>
//               At Studio Signature Cabinetry, our number one employee is THE CUSTOMER. We believe that our success is built on the satisfaction and trust of our clients. Every decision we make and every action we take is centered around delivering exceptional service and exceeding customer expectations. We are dedicated to understanding and fulfilling the unique needs of each client, ensuring that their experience with us is nothing short of extraordinary. SERVICE is not just a part of what we do; it is our mission statement. We are committed to providing exceptional service in every aspect of our work, making sure that our clients always come first.
//             </p>
//             <div className="growth-image"></div>
//           </motion.div>
//             <motion.h2 
//           className="section-title"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.8 }}
//           transition={{ duration: 0.6 }}
//         >
//           Mission Statement
//         </motion.h2>
//           <motion.div 
//             className="service-values"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             {serviceValues.map((item, index) => (
//               <motion.div 
//                 key={index} 
//                 className="service-item"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <div className="service-letter">{item.letter}</div>
//                 <div className="service-content">
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;









import React from 'react';
import './Mission.css';
import { motion } from 'framer-motion';
import img1 from './SERVICE1.png'
const Mission = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };


  const serviceValues = [
    {
      letter: 'S',
      title: 'olutions',
      description: 'Offering innovative and tailored cabinetry options to meet every client\'s unique needs.',
    },
    {
      letter: 'E',
      title: 'xcellence',
      description: 'We strive for excellence in every aspect of our work.',
    },
    {
      letter: 'R',
      title: 'eliability',
      description: 'Dependable and accurate from design to delivery.',
    },
    {
      letter: 'V',
      title: 'alue',
      description: 'We create lasting value for our customers and communities.',
    },
    {
      letter: 'I',
      title: 'nnovation',
      description: 'We are continuously improving and innovating our solutions.',
    },
    {
      letter: 'C',
      title: 'ustomer Service',
      description: 'Providing unparalleled customer service is our priority.',
    },
    {
      letter: 'E',
      title: 'mployee Development',
      description: 'We prioritize the growth and learning of our team members.',
    },
  ];

  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <div className="mission-content">
          <br></br>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            Mission Statement
          </motion.h2>
          <motion.div
            className="mission-statement"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              At Studio Signature Cabinetry, our number one employee is THE CUSTOMER. We believe that our success is built on the satisfaction and trust of our clients. Every decision we make and every action we take is centered around delivering exceptional service and exceeding customer expectations. We are dedicated to understanding and fulfilling the unique needs of each client, ensuring that their experience with us is nothing short of extraordinary. SERVICE is not just a part of what we do; it is our mission statement. We are committed to providing exceptional service in every aspect of our work, making sure that our clients always come first.
            </p>
            <div className="growth-image"></div>
          </motion.div>
          <br></br>
           <br></br>
            <img 
        src={img1}
        alt="Placeholder" 
      className='missionimg'
      />
      <br></br>
     
          {/* <motion.div
            className="service-values"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {serviceValues.map((item, index) => (
           <motion.div
  key={index}
  className="service-item"
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
>
  <div className="hexagon">
    <div className="hexagon-inner">
      <div className="letter-title-container">
        <div className="service-letter">{item.letter}</div>
        <div className="service-content">
          <h3>{item.title}</h3>
        </div>
      </div>
      <div className="service-content">
        <p>{item.description}</p>
      </div>
    </div>
  </div>
  {index < serviceValues.length - 1 && <div className="connector"></div>}
</motion.div>
            ))}
          </motion.div> */}
        </div>
      </div>
        <br></br>
        <br></br>
    </section>
  );
};

export default Mission;




