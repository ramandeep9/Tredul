// src/HomePage.tsx
import React from 'react';
import './home.css';
import home from "../assets/home.jpeg";
import hom from "../assets/skr.jpeg";
import Navbar from "./Nav";
import Footer from "./Footer"

import { Link } from 'react-router-dom';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="home-container">
    

            <Navbar />

      <div className="main">
        <div className="transparent-image">
          <h1 className='head_text'>Explore Our Locations</h1>
          <p>If you have time and skill, then why not share it.<br/>
            If there is a desire to do something for someone, <br/>then register yourself, and login to our website.</p>
          <button className="btn3">Check Our Locations</button>
        </div>

        <div className="se">
          <div className="share-experience">
            <img className="homeimg" alt="image" src={home} />
          </div>
          <div className="irc">
            <p className="visit">VISIT<br/><br/>Universities, Colleges, Schools,<br/> NGOs, Spiritual Centres</p>
            <p className="travel">Travel to the places you like to visit on vacation/official tour, educate the needy from the destination you travel/visit, and live with them to share an extra dose of your professional/life experience if you feel so.</p>
            <center>
              <button className="btn1">Register Account Now</button>
            </center>
          </div>
          <div className="swipe">
            <div className="icons">
              <ul className="twiter iconlist">
                <li className="swipeicon facebook"></li>
                <li className="swipeicon twitter"></li>
                <li className="swipeicon linkedin"></li>
                <li className="swipeicon insta"></li>
                <li className="swipeicon youtube"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mains">
        <div className="transparent">
          <p className="left">
            <h1>Calling all passionate travelers!</h1>
            <h2  className='travel_text'>Your enriching journeys on Tredul and be part of a global community dedicated to exploring, connecting, and making a positive impact. Inspire others with your unique experiences</h2>
          </p>
          <button className="btn2">Share your Experience</button>
        </div>
      </div>
      <div className="container1">
      <div className="left1">
        <h2 className="r2">Mission</h2>
        <p className="t2"><b >Calling all passionate travelers! Share your enriching journeys on Tredul and be part of a global community dedicated to exploring, connecting, and making a positive impact. Inspire others with your unique experiences.</b></p>
      </div>
      <div className="right2">
        <h2 className="r2">Vision</h2>
        <p className="t2"><b>Calling all passionate travelers! Share your enriching journeys on Tredul and be part of a global community dedicated to exploring, connecting, and making a positive impact. Inspire others with your unique experiences</b></p>
      </div>
    </div>

<div>
        <div className="big_container">
          <h1 className="m">Top Edutourist</h1>

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="thumbnail">
                  <img className="my" alt="location" src={hom} />
                  <div className="caption">
                    <p>
                      Dr. Thakur Sudesh <br />Kumar  Raunija
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-3">
                <div className="thumbnail">
                  <img className="my" alt="location" src={hom} />
                  <div className="caption">
                    <p>
                      Dr. Thakur Sudesh<br /> Kumar
                      Raunija
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="col-md-3">
                <div className="thumbnail">
                  <img className="my" alt="location" src={hom} />
                  <div className="caption">
                    <p>
                      Dr. Thakur Sudesh <br />Kumar 
                      Raunija
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <img className="my" alt="location" src={hom} />
                  <div className="caption">
                    <p>
                      Dr. Thakur Sudesh <br />Kumar 
                      Raunija
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="thumbnail">
                  <img className="my" alt="location" src={hom} />
                  <div className="caption">
                    <p>
                      Dr. Thakur Sudesh <br />Kumar 
                      Raunija
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ps */}
        </div>
      </div>
    <div>
      <div>
        <h1 className="m1">What People Say!</h1>
    <div className="pp1">
      <p className="t3">
        <b>Calling all passionate travelers! <br/>Share your enriching journeys <br/> on Tredul and be part of a global <br/> community dedicated to exploring, connecting, and making a positive <br/>impact. Inspire others with <br/> your unique experiences.</b></p>
      <p className="t3">
        <b>Calling all passionate travelers! <br/>Share your enriching journeys<br/> on Tredul and be part of a global <br/> community dedicated to exploring, connecting, and making a positive <br/>impact. Inspire others with <br/> your unique experiences.</b></p>
      <p className="t3">
        <b>Calling all passionate travelers! <br/>Share your enriching journeys <br/> on Tredul and be part of a global  <br/>community dedicated to exploring, connecting, and making a positive <br/>impact. Inspire others with  <br/> your unique experiences.</b></p>
      <p className="t3">
        <b>Calling all passionate travelers! <br/>Share your enriching journeys <br/>on Tredul and be part of a global <br/> community dedicated to exploring, connecting, and making a positive <br/>impact. Inspire others with <br/> your unique experiences.</b></p> 
    </div>
     </div>
    </div>
     
      <Footer/>
    </div>
  );
};

export default HomePage;