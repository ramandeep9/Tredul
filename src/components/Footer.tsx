import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer>
        
        <div className="social-icons"><hr></hr>
          <ul className="twiter">
            <li className="facebook"></li>
            <li className="twitter"></li>
            <li className="linkedin"></li>
            <li className="insta"></li>
            <li className="youtube"></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
            <Link to="/about">About Us</Link></li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Useful links</li>
            <li>Sitemap</li>
        
          </ul>
        </div>
        </footer>
        <div className="copy"> 
        <p>Copyright @DHE 2024</p> </div>
    </div>
  )
}

export default Footer