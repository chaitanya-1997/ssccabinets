import React, { useState } from 'react';
import './ContactMe.css';
import Myfooter from '../MyHome/Myfooter/Myfooter';
import img from './contactus.png';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    note: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for name and city fields
    if (name === 'name' || name === 'city') {
      const lettersOnly = /^[A-Za-z\s]*$/;
      if (!lettersOnly.test(value)) {
        setErrors(prev => ({ ...prev, [name]: 'This field should contain only letters' }));
      } else {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (errors.name || errors.city) {
      alert('Please correct the errors in the form before submitting.');
      return;
    }

    // Phone number validation (US-style: 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Simulate successful form submission
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      address: '',
      note: '',
    });
  };

  return (
    <section id="contact" className="cm-section" style={{ marginTop: '100px' }}>
      {/* Banner */}
      <div className="cm-banner">
        <img src={img} alt="Contact Us Banner" className="cm-banner-image" />
      </div>

      {/* Content */}
      <div className="cm-container">
        <div className="cm-header">
          <h2 className="section-title">Send Us A Message</h2>
          <br />
          <p>Call or submit our online form for inquiries. We look forward to serving you!</p>
        </div>

        <div className="cm-form-container">
          {/* Contact Form */}
          <form className="cm-form" onSubmit={handleSubmit}>
            <div className="cm-form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name} 
                onChange={handleChange}
                pattern="[A-Za-z\s]+"
                title="Name should contain only letters"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="cm-form-group">
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="cm-form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Your Phone (10 digits)" 
                required 
                value={formData.phone} 
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter exactly 10 digits"
              />
            </div>
            <div className="cm-form-group">
              <input 
                type="text" 
                name="city" 
                placeholder="City" 
                required 
                value={formData.city} 
                onChange={handleChange}
                pattern="[A-Za-z\s]+"
                title="City should contain only letters"
              />
              {errors.city && <span className="error-message">{errors.city}</span>}
            </div>
            <div className="cm-form-group">
              <input type="text" name="address" placeholder="Address" required value={formData.address} onChange={handleChange} />
            </div>
            <div className="cm-form-group">
              <textarea name="note" placeholder="Note (Optional)" rows="4" value={formData.note} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="cta-button">Send</button>
          </form>

          {/* Contact Info */}
          <div className="cm-details">
            <h3 className="section-title">Contact Information</h3>
            <br />
            <ul>
              <li>
                <span>Address:</span> 200 Outlook Point Drive #200, Orlando, FL 32809
              </li>
              <li>
                <span>Phone:</span>{' '}
                <a className="plain-link" href="tel:3214727244">321-472-7244</a>
              </li>
              <li>
                <span>Email:</span>{' '}
                <a className="plain-link" href="mailto:info@studiosignaturecabinets.com">info@studiosignaturecabinets.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Myfooter />
    </section>
  );
};

export default ContactMe;