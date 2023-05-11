import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterWithUsername from './components/RegisterWithUsername';
import Home from './pages/Home';
import ReservationForm from './pages/ReservationForm';
import NewCar from './pages/NewCar';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<RegisterWithUsername />} />
          <Route path="/reservation_form" element={<ReservationForm />} />
          <Route path="/my_reservations" element="my reservations" />
          <Route path="/new_car" element={<NewCar />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
