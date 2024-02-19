// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route from react-router-dom
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;



