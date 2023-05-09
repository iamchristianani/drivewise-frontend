import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterWithUsername from './components/RegisterWithUsername';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element="Home page" />
          <Route path="/login" element={<RegisterWithUsername />} />
          <Route path="/view_all_tests" element="view all tests" />
          <Route path="/reservation_form" element="reservation form" />
          <Route path="/my_reservations" element="my reservations" />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
