import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Schedule from './components/Schedule';
import ScheduleTime from './components/ScheduleTime';
import Activities from './components/Activities';
import Rating from './components/Rating';
import DashboardTourist from './components/Dashboard/DashboardTourist';
import DashboardHost from './components/Dashboard/DashboardHost';
import ShareExperience from './components/ShareExperience';



function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} /> {/* Pass an empty object as history prop */}
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/DashboardHost" element={<DashboardHost />} />
          <Route path="/Dashboardtour" element={<DashboardTourist />} />
          <Route path="/SchdeuleTime" element={<ScheduleTime />} /> 
           <Route path="/ShareExperience" element={<ShareExperience />} />
          <Route path="/login/*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
