import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/templates/Login';
import Register from '../src/components/templates/Register';
import Navbar from './components/navBar';
import RestaurantList from './components/templates/RestaurantList';
import Review from "../src/components/cards/reviewCard.js";
import ReviewFront from './pages/restaurant.js';

const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />

      </Routes>

    </Router>
  );
};

export default App;
