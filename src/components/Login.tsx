// Login.tsx
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</meta>
import React, { useState } from 'react';
import "./login.css";
import logo from "../assets/logo.png";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here (e.g., call API to authenticate user)
  };

  return (
    <div className="login-container">
      <div className="tredul-logo"><img className = "mylogo"  alt ="location" src={logo} /></div>
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
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

export default Login;