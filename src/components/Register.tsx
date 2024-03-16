
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Nav";
 import Footer from "./Footer";
import './register.css'; 
import app from "../firebaseConfig";
import { getDatabase,ref,set,push } from "firebase/database";
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register: React.FC = () => {
  const [userType, setUserType] = useState<string>(''); // State to store selected user type
  const [hostname, setInputHname] =useState('');
  const [hostmail, setInputHmail] =useState('');
  const [hostpass, setInputHpass] =useState('');
  const [tourname, setInputTname] =useState('');
  const [tourmail, setInputTmail] =useState('');
  const [tourpass, setInputTpass] =useState('');


const savehost =() =>{
  const db = getDatabase(app);
  const newDoc = push(ref(db, "Eduhosts/profile"));
  set(newDoc, {
    hostName: hostname,
    hostMail: hostmail,
    hostPass: hostpass
  }).then(() => {
    alert("You registered as an Eduhost")
  }).catch((error)=>{alert('Error')})

}

const savetour =() =>{
  const db = getDatabase(app);
  const newDoc = push(ref(db, "Edutourists/profile"));
  set(newDoc, {
    tourName: tourname,
    tourMail: tourmail,
    tourPass: tourpass
  }).then(() => {
    alert("You registered as an Edutourist")
    // const userCredential = await createUserWithEmailAndPassword
    // console.log(userCredentail);
  }).catch((error)=>{
    alert('Error')})
}
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
          <input onChange={(e) => setInputHname(e.target.value)} type="texts" required  placeholder="Host Name" className="usernam hosteinp" />
          <input onChange={(e) => setInputHmail(e.target.value)} type="emails" required className="usernam hosteinp" placeholder="Email"/> 
          <input onChange={(e) => setInputHpass(e.target.value)} type="password" required  placeholder="Password" className="usernam" />
          {/* Add input fields and other necessary elements for eduhost registration */}
          <button onClick={savehost} className="mybtn">Register</button>

          <p>Already have an account? <Link to="/login">Login here</Link></p>
      <Link to="/" className="back-link">Go back to Home Page</Link>
        </div></div>
      );
    } else if (userType === 'edutourist') {
      return (
        <div className="register-form">
          <div className="register-container">
             <h2 className="me">Create an Account</h2>
          <input onChange={(e) => setInputTname(e.target.value)}  required type="text_register" id='text_register' placeholder=" Tourist Name" />
          <input onChange={(e) => setInputTmail(e.target.value)}  required type="email_register" id='email_register' placeholder="Email"/>
          <input onChange={(e) => setInputTpass(e.target.value)}  required type="password" id='password_register'placeholder="Password"/>
          {/* Add more input fields as needed */}
          <button onClick={savetour} className="mybtn">Register</button>

          <p>Already have an account? 
            <Link to="/login">Login here</Link></p>
            <Link to="/" className="back-link">Go back to Home Page</Link>
             </div></div>
      );
       } else {
        return null; // Render nothing if no user type is selected
      }
   }

  return (
    <div><Navbar/>
    <div className="register-page">
      <h1 className='register_h1'>Register</h1>
      {/* Select user type section */}
      <div className="user-type-selection">
        <h2 className='usertype'>Select User Type</h2>
        <button onClick={() => handleUserTypeSelect('eduhost')} id='registerAsHost'>Register as EduHost</button>
        <button onClick={() => handleUserTypeSelect('edutourist')}id='registerAsTourist'>Register as EduTourist</button>
      </div>
      {/* Render register form based on selected user type */}
      {renderRegisterForm()}
      
      </div><div><Footer/></div></div>
      
  );
};

export default Register;