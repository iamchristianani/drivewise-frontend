import React from 'react';
import './style/Home.css';
import CarsList from '../components/Cars/CarsList';
import Navbar from '../components/Navbar';

const Home = () => (
  <div className="page_container">
    <Navbar />
    <div className="home_container">
      <div className="home_header">
        <h2>CAR RANGES</h2>
        <p>Please select a car model</p>
        <div className="dot_divider">.............................</div>
      </div>
      <CarsList />
    </div>
  </div>
);

export default Home;
