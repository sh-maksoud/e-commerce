

import './Contact.css'; 
import logo from '../../src/assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(15, 'Name cannot be more than 15 characters long')
    .required('This field is required'),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    )
    .required("Email is Required"),
    subject: Yup.string(),
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log('Form data:', formData);

    } catch (validationErrors) {
      const errorMessages = {};
      validationErrors.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);
    }
  };

  return (
    <div id="main" className="contact-container">
      <div className="contact-header">
        <img className="contact-logo" src={logo} alt="logo" />
        <h2>Contact</h2>
        <p>
          <Link to="/">Home</Link> &gt; Contact
        </p>
      </div>
      <div id="top" className="contact-title-container">
        <h1 className="contact-title">Get in touch with us</h1>
        <h2 className="contact-description">
          For more information about our product & services. Please feel free to drop us an email. Our staff always be there to help you out. Do not hesitate!
        </h2>
      </div>
      <div id="inside" className="contact-content">
        <div id="left" className="contact-info">
          <div id="l-first" className="contact-item">
            <i className="fa-solid fa-location-dot contact-icon"></i>
            <div>
              <h1 className="contact-info-title">Address</h1>
              <h2 className="contact-info-detail">Chilanzar, Tashkent, Uzbekistan</h2>
            </div>
          </div>
          <div id="l-second" className="contact-item">
            <i className="fa-solid fa-phone contact-icon"></i>
            <div>
              <h1 className="contact-info-title">Phone</h1>
              <h2 className="contact-info-detail">Mobile: +998 90 815 04 **</h2>
            </div>
          </div>
          <div id="l-third" className="contact-item">
            <i className="fa-solid fa-clock contact-icon"></i>
            <div>
              <h1 className="contact-info-title">Working Time</h1>
              <h2 className="contact-info-detail">Monday-Friday: 9:00 - 22:00</h2>
              <h2 className="contact-info-detail">Saturday-Sunday: 10:00 - 21:00</h2>
            </div>
          </div>
        </div>
        <div id="right" className="contact-form">
          <form className="contact-form-container" onSubmit={handleSubmit}>
            <div className="contact-form-item">
              <label htmlFor="name">Your name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Falonchi" 
                value={formData.name} 
                onChange={handleChange} 
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="contact-form-item">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                value={formData.email} 
                onChange={handleChange} 
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="contact-form-item">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="This is optional" 
                value={formData.subject} 
                onChange={handleChange} 
              />
              {errors.subject && <div className="error-message">{errors.subject}</div>}
            </div>
            <div className="contact-form-item">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Enter your message" 
                value={formData.message} 
                onChange={handleChange} 
              />
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            <button type="submit" className="contact-submit-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
