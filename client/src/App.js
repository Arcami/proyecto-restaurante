import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/components/templates/Login";
import Register from "../src/components/templates/Register";
import Review from "./components/cards/reviewCard.jsx";
import ReservationCard from "./components/cards/reservationCard.jsx";
import Home from "./pages/Home.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import Navbar from "./components/templates/navBar.jsx";

const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reservation" element={<ReservationCard />} />
      </Routes>
    </Router>
  );
};

export default App;
