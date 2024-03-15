
import "./schedule.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from "./Nav";
import Footer from "./Footer";

const SchedulePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement your booking logic here
    console.log('Booking scheduled:', selectedDate, selectedTime);
  };

  return (
    <div><Navbar/><div  className="schedule-container">
      <h2 className="schedule">Schedule</h2>

      <div className="calendar-container">
        <div className="calendar">
          {/* Your calendar JSX here */}
        </div>

        <form className="schedule-form" onSubmit={handleSubmit}>
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />

          <button type="submit" id="schedulebtn">Book Schedule</button>
        </form>
      </div></div>
      <Footer/>
    </div>
  );
};

export default SchedulePage;
