// import React, { useState, useRef, useEffect } from 'react';
// import './SignupPage.css';
// import illustration from './images/signupgif.gif'; // Replace with your image

// const SignupPage = () => {
//   const [userType, setUserType] = useState('customer');
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     businessName: '',
//     taxId: '',
//     phone: '',
//     address: '',
//     agreeTerms: false,
//   });

//   const rightPanelRef = useRef(null);
//   const leftPanelRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   // Function to sync left panel height with right panel
//   const syncHeights = () => {
//     if (rightPanelRef.current && leftPanelRef.current) {
//       const height = rightPanelRef.current.offsetHeight;
//       leftPanelRef.current.style.height = `${height}px`;
//     }
//   };

//   // Sync height on mount and when userType changes
//   useEffect(() => {
//     syncHeights();
//     window.addEventListener('resize', syncHeights);

//     return () => {
//       window.removeEventListener('resize', syncHeights);
//     };
//   }, [userType]);

//   return (
//     <div className="signup-container">
//       <div className="left-panel" ref={leftPanelRef}>
//         <img src={illustration} alt="Signup Illustration" className="illustration"  />
//       </div>
//       <div className="right-panel" ref={rightPanelRef}>
//         <form
//           className="signup-form"
//           onSubmit={handleSubmit}
//           style={{ marginTop: userType === 'customer' ? '200px' : '550px' }}
//         >
//           {/* Your existing form fields go here */}
//           <h2>Create an Account</h2>

//           {/* User Type Toggle */}
//           <div className="toggle-group">
//             <label className={`toggle-option ${userType === 'customer' ? 'active' : ''}`}>
//               <input
//                 type="radio"
//                 name="userType"
//                 value="customer"
//                 checked={userType === 'customer'}
//                 onChange={() => setUserType('customer')}
//               />
//               Customer
//             </label>
//             <label className={`toggle-option ${userType === 'vendor' ? 'active' : ''}`}>
//               <input
//                 type="radio"
//                 name="userType"
//                 value="vendor"
//                 checked={userType === 'vendor'}
//                 onChange={() => setUserType('vendor')}
//               />
//               Vendor
//             </label>
//           </div>

//           {/* Form Fields */}
//           <div className="form-group">
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder=" Enter your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group password-group">
//             <label>Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? 'Hide' : 'Show'}
//             </span>
//           </div>

//           <div className="form-group">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Conditional Fields for Vendor */}
//           {userType === 'vendor' && (
//             <>
//               <div className="form-group">
//                 <label>Business Name</label>
//                 <input
//                   type="text"
//                   name="businessName"
//                   placeholder="Your Business Name"
//                   value={formData.businessName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Tax ID / VAT Number</label>
//                 <input
//                   type="text"
//                   name="taxId"
//                   placeholder="Your Tax ID / VAT Number"
//                   value={formData.taxId}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Business Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Your Business Address"
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//               </div>
//             </>
//           )}

//           {/* Terms Checkbox */}
//           <div className="form-group terms">
//             <label>
//               <input
//                 type="checkbox"
//                 name="agreeTerms"
//                 checked={formData.agreeTerms}
//                 onChange={handleChange}
//                 required
//               />
//               I agree to the <a href="/terms">Terms & Conditions</a>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="btn-signup">
//             Sign Up
//           </button>

//           {/* Login Link */}
//           <p className="login-link">
//             Already have an account? <a href="/login">Log In</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';
import illustration from './images/signupgif.gif'; // Replace with your image
import TermsOfUse from '../MyHome/Myfooter/TermsOfUse';
import { motion } from 'framer-motion';
const SignupPage = () => {
  const [userType, setUserType] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    taxId: '',
    phone: '',
    address: '',
    agreeTerms: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const rightPanelRef = useRef(null);
  const leftPanelRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError(''); // Clear error on input change
  };



  const validateEmail = (email) => {
  // Basic email regex (no space and valid format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Minimum 8 characters, at least one uppercase, one lowercase, one number, one special character, no spaces
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  return passwordRegex.test(password) && !/\s/.test(password);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/; // Only 10 digits
  return phoneRegex.test(phone);
};



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setSuccess('');
  //   setLoading(true);

  //   try {
  //     const response = await axios.post('https://my-app-amec.onrender.com/api/signup', {
  //       userType,
  //       fullName: formData.fullName,
  //       email: formData.email,
  //       password: formData.password,
  //       confirmPassword: formData.confirmPassword,
  //       businessName: formData.businessName,
  //       taxId: formData.taxId,
  //       phone: formData.phone,
  //       address: formData.address,
  //       agreeTerms: formData.agreeTerms,
  //     });

  //     setSuccess(response.data.message);
  //     setFormData({
  //       fullName: '',
  //       email: '',
  //       password: '',
  //       confirmPassword: '',
  //       businessName: '',
  //       taxId: '',
  //       phone: '',
  //       address: '',
  //       agreeTerms: false,
  //     });
  //     setUserType('customer');

  //     // Navigate to login page after a short delay
  //     setTimeout(() => {
  //       navigate('/login');
  //     }, 2000);
  //   } catch (err) {
  //     if (err.response && err.response.data && err.response.data.error) {
  //       setError(err.response.data.error);
  //     } else {
  //       setError('An unexpected error occurred. Please try again.');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Function to sync left panel height with right panel
  
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setLoading(true);

 const { email, password, confirmPassword, phone } = formData;

  // Validate Email
  if (!validateEmail(email)) {
    setError('Please enter a valid email address with no spaces.');
    setLoading(false);
    return;
  }

  // Validate Password
  if (!validatePassword(password)) {
    setError(
      'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character with no spaces.'
    );
    setLoading(false);
    return;
  }

  if (password !== confirmPassword) {
    setError('Passwords do not match.');
    setLoading(false);
    return;
  }

  
  if (!validatePhone(phone)) {
    setError('Phone number must be exactly 10 digits.');
    setLoading(false);
    return;
  }

  try {
    const response = await axios.post('https://my-app-amec.onrender.com/api/signup', {
      userType,
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      businessName: formData.businessName,
      taxId: formData.taxId,
      phone: formData.phone,
      address: formData.address,
      agreeTerms: formData.agreeTerms,
    });

    setSuccess(response.data.message);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      businessName: '',
      taxId: '',
      phone: '',
      address: '',
      agreeTerms: false,
    });
    setUserType('customer');

    setTimeout(() => {
      navigate('/signup');
    }, 2000);
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      setError(err.response.data.error);
    } else {
      setError('An unexpected error occurred. Please try again.');
    }
  } finally {
    setLoading(false);
  }
};

  
  
  
  const syncHeights = () => {
    if (rightPanelRef.current && leftPanelRef.current) {
      const height = rightPanelRef.current.offsetHeight;
      leftPanelRef.current.style.height = `${height}px`;
    }
  };

  // Sync height on mount, when userType changes, or on resize
  useEffect(() => {
    syncHeights();
    window.addEventListener('resize', syncHeights);

    return () => {
      window.removeEventListener('resize', syncHeights);
    };
  }, [userType]);

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
      }
    };
  

  return (
    <div className="signup-container">
      <div className="left-panel" ref={leftPanelRef}>
        <img src={illustration} alt="Signup Illustration" className="illustration" />
      </div>
      <div className="right-panel" ref={rightPanelRef}>
       <form
  className={`signup-form ${userType === 'customer' ? 'customer-margin' : 'vendor-margin'}`}
  onSubmit={handleSubmit}
>

          <h2>Create an Account</h2>

          {/* Error and Success Messages */}
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          {/* User Type Toggle */}
          <div className="toggle-group">
            <label className={`toggle-option ${userType === 'customer' ? 'active' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="customer"
                checked={userType === 'customer'}
                onChange={() => setUserType('customer')}
                disabled={loading}
              />
              Customer
            </label>
            <label className={`toggle-option ${userType === 'vendor' ? 'active' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="vendor"
                checked={userType === 'vendor'}
                onChange={() => setUserType('vendor')}
                disabled={loading}
              />
              Vendor
            </label>
          </div>

          {/* Form Fields */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          {/* Phone Number and Address for Both Customer and Vendor */}
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* Conditional Fields for Vendor */}
          {userType === 'vendor' && (
            <>
              <div className="form-group">
                <label>Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Your Business Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>Tax ID / VAT Number</label>
                <input
                  type="text"
                  name="taxId"
                  placeholder="Your Tax ID / VAT Number"
                  value={formData.taxId}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
            </>
          )}

          {/* Terms Checkbox */}
          <div className="form-group terms">
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                disabled={loading}
              />
              I agree to the<a href="#" onClick={(e) => { e.preventDefault(); openModal(modals.termsOfUse); }}>Terms & Conditions</a>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-signup" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          {/* Login Link */}
          <p className="login-link">
            Already have an account? <a href="https://studiosignaturecabinets.com/customer/login">Log In</a>
          
          </p>
        </form>
      </div>
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
    </div>
  );
};

export default SignupPage;