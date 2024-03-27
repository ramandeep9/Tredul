
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Nav";
import Footer from "./Footer";
import './register.css'; 

const Register: React.FC = () => {
  const [userType, setUserType] = useState<string>(''); // State to store selected user type

  const handleUserTypeSelect = (type: string) => {
    // Popup confirmation alert when user type is selected
    const confirmRegister = window.confirm(`Are you sure you want to register as a ${type}?`);
    if (confirmRegister) {
      setUserType(type);
    }
  };

  const renderRegisterForm = () => {
    // Render register form based on selected user type
    
    if (userType === 'eduhost') {
      return (
        
        <div className="register-form">
          <div className="register-container">
      <h2 className="me">Create an Account</h2>
          <input type="text" placeholder="Host Name" id='register_Hform'/>
          <input type="email" placeholder="Email" id='register_Hform'/>
          <input type="password" placeholder="Password" id='register_Hform'/>
          {/* Add input fields and other necessary elements for eduhost registration */}
          <button className="mybtn">Register</button><p>Already have an account? <Link to="/login">Login here</Link></p>
      <Link to="/" className="back-link">Go back to Home Page</Link>
        </div></div>
      );
    } else if (userType === 'edutourist') {
      return (
        <div className="register-form">
          <div className="register-container">
      <h2 className="me">Create an Account</h2>
          <input type="text" placeholder=" Tourist Name" id="register_Tform" />
          <input type="email" placeholder="Email" id="register_Tform" />
          <input type="password" placeholder="Password" id="register_Tform" />
          {/* Add more input fields as needed */}
          <button className="mybtn">Register</button><p>Already have an account? <Link to="/login">Login here</Link></p>
      <Link to="/" className="back-link">Go back to Home Page</Link>
        </div></div>
      );
    } else {
      return null; // Render nothing if no user type is selected
    }
  };

  return (
    <div><Navbar/>
    <div className="register-page">
      <h1>Register</h1>
      {/* Select user type section */}
      <div className="user-type-selection">
        <h2>Select User Type</h2>
        <button  className="Reg"onClick={() => handleUserTypeSelect('eduhost')}>Register as EduHost</button>
        <button className="Reg"onClick={() => handleUserTypeSelect('edutourist')}>Register as EduTourist</button>
      </div>
      {/* Render register form based on selected user type */}
      {renderRegisterForm()}
      
      </div><div><Footer/></div></div>
      
  );
};

export default Register;