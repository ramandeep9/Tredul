// Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here (e.g., call API to authenticate user)
  };

  return (
    <div className="login-container">
      <h2>Login to Tredul</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <a href="/forgot_password">Forgot Password?</a>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

export default Login;
