// src/HomePage.tsx
import React from 'react';
import './index.css'; 
import logo from "./logo.png"
import home from "./home.jpeg"
import homeimages from "./expereience.jpeg"
import { Link } from 'react-router-dom';


interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="home-container">
      <nav>
        <div className="logo"><img className = "mylogo" src ={logo} alt ="location" /></div>
        <ul className="hover">
          <li className ="mann">Home</li>
          <li>Activities</li>
          <li>Schedule</li>
          <li><Link to = "/contact">Contact</Link></li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li className="login"> <Link to="/register">Register</Link>
            {/* <ul className="dropmenu">
              <li className="dropitem">Edutourist</li>
              <li className="dropitem">Eduhost</li>
            </ul> */}
          </li>

        </ul>
      </nav>
      
      <div className="main">
     
      <div className="transparent-image">
        <h1>Explore Our Locations</h1>
        <p>If you have time and skill, then why not share it.<br/>
If there is a desire to do something for someone, <br/>then register yourself,and login to our web site.</p>
        <button className="btn1">Check Our Locations</button>
      </div>


<div className="se">
      <div className="share-experience">
        <img className="homeimg" alt = "image" src={home} />
      </div>
        <div className="irc"> <p className="visit">VISIT<br/>
        <br/>
Universities, Colleges, Schools,<br/> NGOs, Spiritual Centres<br/></p>
<p className="travel">Travel the place you like to visit on vacation/official tour, Educate the needy from the destination you travel/visit and Live with them to share extra dose of your professional/life experience if you feel so.</p>
        <center> <button className="btn1">Register Account Now</button></center>
      </div>

        <div className="swipe"> 
            <div className="icons ">
          
          <ul className =" twiter iconlist">
          <li className =" swipeicon facebook"></li>
          <li className =" swipeicon twitter"></li>
          <li className =" swipeicon linkedin"></li>
          <li className =" swipeicon insta"></li>
          <li className =" swipeicon youtube"></li></ul>
              </div>
        </div> 


</div>

      </div>
      <div className="mains">
     
     <div className="transparent">
      
       <p className="left">Calling all passionate travelers! <br/> Share your enriching journeys on Tredul and be part of a global community dedicated to exploring, connecting, and making a positive impact.<br/>
        Inspire others with your unique experiences <br/></p>
       <button className="btn1">Share your Experience</button>
     </div></div>




      <footer>
        <div className="footer-links">
          <ul>
            <li>About Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social-icons">
          
          <ul className ="twiter">
          <li className ="facebook"></li>
          <li className ="twitter"></li>
          <li className ="linkedin"></li>
          <li className ="insta"></li>
          <li className ="youtube"></li></ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
