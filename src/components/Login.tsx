// Login.tsx
import React, { useState } from 'react';
import "./login.css";
import logo from "../assets/logo1.png";
import Navbar from "./Nav";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here (e.g., call API to authenticate user)
  };

  return (
    <div><Navbar/>
    <div className="login-container">
      <div className="tredul-logo">
        <img className = "myloginlogo"  alt ="location" src={logo} /></div>
      <div className="log"><h1 className="head">Login to Tredul</h1></div>
      <form onSubmit={handleSubmit}>
        <input 
          type="email_login"
          id='email_login'
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id='password_login'
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='btn'>Login</button>
      </form>
      <a href="/forgot_password">Forgot Password?</a>
      <p className='register_account'>Don't have an account? <a href="/register">Register here</a></p>
    </div><Link to ="EduTouristDashboard">dashboard</Link>
    <Footer/></div>
  );
};

export default Login;