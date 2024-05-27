import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Login from './assets/js/Login';
import GameMode from './assets/js/gamemode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gamemode" element={<GameMode />} />
      </Routes>
    </Router>
  );
}

export default App;
