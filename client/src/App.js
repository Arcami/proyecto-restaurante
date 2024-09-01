import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/templates/Login';
import Register from '../src/components/templates/Register';
import Review from "../src/components/cards/reviewCard";
import RestaurantList from './pages/RestaurantPage';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
        <Route path="restaurants" element={<RestaurantList />} />
      </Routes>

    </Router>
  );
};

export default App;
