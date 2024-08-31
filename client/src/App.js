// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/templates/Login';
import Register from './components/templates/Register';
import Profile from './pages/Profile'; 
import Navbar from './components/navBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
