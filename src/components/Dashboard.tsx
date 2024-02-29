
// src/HomePage.tsx
import React from 'react';
import './dashboard.css'; 
// import Navbar from "./Nav";
// import logo from "../assets/logo.png"
// import home from "../assets/home.jpeg"
// import homeimages from "../assets/expereience.jpeg"
import { Link } from 'react-router-dom';


interface DashboardProps {}

const HomePage: React.FC<DashboardProps> = () => {
  return(

<body>
    <h2>Welcome to Your Dashboard, JohnDoe!</h2>

    <div className="dashboard-container">
        <div className="widget">
            <h3>Profile Information</h3>
            <img src="profile.jpg" alt="Profile" className="profile-image"></img>
            <p>Username: JohnDoe</p>
            <p>Email: john@example.com</p>
            <button>Edit Profile</button>
        </div>

        <div className="widget">
            <h3>Recent Activity</h3>
            <ul>
                <li>Completed Task A</li>
                <li>Started Task B</li>
            </ul>
            <button>View All Activities</button>
        </div>

        <div className="widget">
            <h3>Options</h3>
            <ul>
                <li><a href="#">Change Password</a></li>
                <li><a href="#">Privacy Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </div>
    <Link to="/" className="back-link">Go back to Home Page</Link>
</body>
  );
};
export default DashboardProps ;


