

// import React, { useState } from 'react';
// import './Myfooter.css';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
// import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import { FaAngleRight } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import TermsOfUse from './TermsOfUse';
// import PrivacyPolicy from './PrivacyPolicy';

// const Myfooter = () => {
//   const [modalContent, setModalContent] = useState(null);

//   const openModal = (content) => {
//     setModalContent(content);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setModalContent(null);
//     document.body.style.overflow = 'auto';
//   };

//   const modals = {
//     termsOfUse: {
//       title: 'Terms of Service',
//       content: <TermsOfUse />,
//     },
//     privacyPolicy: {
//       title: 'Privacy Policy',
//       content: <PrivacyPolicy />,
//     },
//   };

//   return (
//     <footer className="footer">
//       {/* Footer Top Section */}
//       <div className="footer-top">
//         <div className="container">
//           <div className="footer-content">
//             {/* Footer Logo (5 columns) */}
//             <div className="footer-logo">
//               <h3>Studio Signature Cabinets</h3>
//               <p>Offering innovative and tailored cabinetry options to meet every client's unique needs.</p>
//               <div className="social-icons">
//                 <a href="#" className="social-icon"><FaFacebookF /></a>
//                 <a href="#" className="social-icon"><FaInstagram /></a>
//                 <a href="#" className="social-icon"><FaLinkedinIn /></a>
//                 <a href="#" className="social-icon"><FaPinterestP /></a>
//               </div>
//             </div>
//             <div className="footer-empty">

//             </div>

//             {/* Quick Links (3 columns) */}
//             <div className="footer-links">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><NavLink to='/'><FaAngleRight /> Home</NavLink></li>
//                 <li><NavLink to='/experience'><FaAngleRight /> Experience</NavLink></li>
//                 <li><NavLink to='/products'><FaAngleRight /> Products</NavLink></li>
//                 <li><NavLink to='/gallery'><FaAngleRight /> Gallery</NavLink></li>
//                 <li><NavLink to='/contactus'><FaAngleRight /> Contact</NavLink></li>
//               </ul>
//             </div>

//             {/* Contact Us (4 columns) */}
//             <div className="footer-contact">
//               <h4>Contact Us</h4>
//               <p>
//                 <FaMapMarkerAlt /> 200 Outlook Point Drive #200,<br />Orlando, FL 32809
//               </p>
//               <p>
//                 <FaPhone /> <a className="footer-link" href="tel:3214727244">321-472-7244</a>
//               </p>
//               <p>
//                 <FaEnvelope /> <a className="footer-link" href="mailto:info@studiosignaturecabinets.com">info@studiosignaturecabinets.com</a>
//               </p>
//               <p>
//                 <FaClock /> Mon–Fri: 8am–6pm
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//     {/* Footer Bottom Section */}
// <div className="footer-bottom">
//   <div className="container">
//     <p>
//       © {new Date().getFullYear()} Studio Signature Cabinets. All Rights Reserved. 
//       <span className="developer-credit">
//         Developed and managed by <a href="https://zeta-v.com/" target="_blank" rel="noopener noreferrer">Zeta V</a>
//       </span>
//     </p>
//     <div className="footer-bottom-links">
//       <a href="#" onClick={(e) => { e.preventDefault(); openModal(modals.privacyPolicy); }}>Privacy Policy</a>
//       <a href="#" onClick={(e) => { e.preventDefault(); openModal(modals.termsOfUse); }}>Terms of Service</a>
//     </div>
//   </div>
// </div>

//       {modalContent && (
//         <div className="footer-modal-overlay" onClick={closeModal}>
//           <motion.div
//             className="footer-modal-content"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.3 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button className="footer-modal-close-button" onClick={closeModal}>
//               ×
//             </button>
//             <h2>{modalContent.title}</h2>
//             <div className="footer-modal-content-container">
//               {modalContent.content}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </footer>
//   );
// };

// export default Myfooter;



import React, { useState } from 'react';
import './Myfooter.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

const Myfooter = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  const modals = {
    termsOfUse: {
      title: 'Terms of Service',
      content: <TermsOfUse />,
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      content: <PrivacyPolicy />,
    },
  };

  return (
    <footer className="footer">
      {/* Footer Top Section */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* Footer Logo (5 columns) */}
            <div className="footer-logo">
              <h3>Studio Signature Cabinets</h3>
              <p>Offering innovative and tailored cabinetry options to meet every client's unique needs.</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
                <a href="#" className="social-icon"><FaPinterestP /></a>
              </div>
            </div>
            <div className="footer-empty"></div>
            {/* Quick Links (3 columns) */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><NavLink to='/'><FaAngleRight /> Home</NavLink></li>
                <li><NavLink to='/experience'><FaAngleRight /> Experience</NavLink></li>
                <li><NavLink to='/products'><FaAngleRight /> Products</NavLink></li>
                <li><NavLink to='/gallery'><FaAngleRight /> Gallery</NavLink></li>
                <li><NavLink to='/contactus'><FaAngleRight /> Contact</NavLink></li>
              </ul>
            </div>
            {/* Contact Us (4 columns) */}
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>
                <FaMapMarkerAlt /> 200 Outlook Point Drive #200,<br />Orlando, FL 32809
              </p>
              <p>
                <FaPhone /> <a className="footer-link" href="tel:3214727244">321-472-7244</a>
              </p>
              <p>
                <FaEnvelope /> <a className="footer-link" href="mailto:info@studiosignaturecabinets.com">info@studiosignaturecabinets.com</a>
              </p>
              <p>
                <FaClock /> Mon–Fri: 8am–6pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>© {new Date().getFullYear()} Studio Signature Cabinets. All Rights Reserved.</p>
            </div>
            <div className="developer-credit">
              <p>Developed and managed by <a href="https://zeta-v.com/" target="_blank" rel="noopener noreferrer" style={{color:'#6290cf'}}>ZETA-V</a></p>
            </div>
            <div className="footer-bottom-links">
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(modals.privacyPolicy); }}>Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(modals.termsOfUse); }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="footer-modal-overlay" onClick={closeModal}>
          <motion.div
            className="footer-modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="footer-modal-close-button" onClick={closeModal}>
              ×
            </button>
            <h2>{modalContent.title}</h2>
            <div className="footer-modal-content-container">
              {modalContent.content}
            </div>
          </motion.div>
        </div>
      )}
    </footer>
  );
};

export default Myfooter;