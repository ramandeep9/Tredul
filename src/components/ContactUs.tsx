
import React from 'react';
 import photo from '../assets/image.jpg'
import { Link } from 'react-router-dom';
import './contact.css'
import Navbar from "./Nav";
import Footer from "./Footer"


const ContactUs: React.FC = () => {
  return (
    <div><Navbar/>
    <div className="contact-us-container">
       <h2 className="contact-us-header">Get in <span  className='Touchcolor'>Touch</span></h2>
       <div className="background image">
        <img className="img" alt = "image" src={photo} />
      </div>
       <h3 className = "contact-us-innerheader">Drop a line, we're all ears! Simple, quick, and ready to make your messages count</h3>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Your Mobile Number" required />
          </div>
          <div className="form-group">
            <label htmlFor="application">Application:</label>
            <input type="text" id="application" name="application" placeholder="Application" required />
          </div>
          <div className="form-group">
            <label htmlFor="query">Query:</label>
            <textarea id="query" name="query" placeholder="Your Query" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Message</button>
        </form>
      </div>
      <Link to="/" className="back-link">Go back to Home Page</Link>
  
    </div>
    <Footer/>
  </div>
  );
};

export default ContactUs;