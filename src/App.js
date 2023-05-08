import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterWithUsername from './components/RegistarWithUsername';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element="Home page" />
          <Route path="/Registar" element={<RegisterWithUsername />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
