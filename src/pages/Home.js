import React from 'react';
import './style/Home.css';
import CarsList from '../components/Cars/CarsList';

const Home = () => (
  <>
    <div className="home_container">
      <div className="home_header">
        <h2>CAR RANGES</h2>
        <p>Please select a car model</p>
        <div className="dot_divider">.............................</div>
      </div>
      <CarsList />
    </div>
  </>
);

export default Home;
