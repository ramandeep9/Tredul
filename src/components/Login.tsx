import React, { useState, useEffect } from 'react';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import "./login.css";
import logo from "../assets/logo1.png";
import Navbar from "./Nav";
import Footer from "./Footer";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    if (loggedIn) {
      navigate("/Dashboard");
    }
  }, [loggedIn, navigate]);

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="tredul-logo">
          <img className="myloginlogo" alt="location" src={logo} />
        </div>
        <div className="log">
          <h1 className="head">Login to Tredul</h1>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <input
            type="email"
            id='login_email'
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id='login_pswd'
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className='btn'>Login</button>
          {error && <div className="error">{error}</div>}
        </form>
        <Link to="/forgot_password">Forgot Password?</Link>
        <p className='register_account'>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
      <Link to="EduTouristDashboard">dashboard</Link>
      <Footer />
    </div>
  );
};

export default Login;
