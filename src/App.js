import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterWithUsername from './components/RegisterWithUsername';
import Home from './pages/Home';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<RegisterWithUsername />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
