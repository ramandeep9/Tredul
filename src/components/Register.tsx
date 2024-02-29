
import React, { useState } from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import Navbar from "./Nav";
import Footer from "./Footer";


const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add registration logic here (e.g., call API to register user)
  };

  return (
     <div><Navbar/>
     <div className="register-container">
      <h2 className="me">Create an Account</h2>
      <form onSubmit={handleSubmit} className='rmn'>
        <input
          type="text_register"
          id='text_register'
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email_register"
          id='email_register'
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password_register"
          id='password_register'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="mybtn">Register</button>
      </form>
      <p className='account'>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
    <Footer/>
    </div>

  );
};

export default Register;
