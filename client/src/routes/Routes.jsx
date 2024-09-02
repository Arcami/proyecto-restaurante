import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/templates/Login.jsx";
import Register from "../components/templates/Register.jsx";
import Review from "../components/cards/reviewCard.jsx";
import ReviewFront from "../pages/reviewPage.js";
import ReservationCard from "../components/cards/reservationCard.jsx";
import Home from "../pages/Home.jsx";
import NavBar from "../components/templates/navBar.jsx";
import Footer from "../components/templates/Footer.jsx";
import RestaurantList from "../components/templates/RestaurantList.jsx";
import RestaurantCard from "../components/cards/restaurantCard.jsx";

const App = () => {
  return (
    <Router>
      {/* Navbar se mostrará en todas las rutas */}
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
        <Route path="RestaurantList" element={<RestaurantList />} />
        <Route path="/reservationcard" element={<ReservationCard />} />
        <Route path="/reviewFront" element={<ReviewFront />} />
        <Route path="/restaurantcard" element={<RestaurantCard />} />
      </Routes>

      {/* Footer se mostrará en todas las rutas */}
      <Footer />
    </Router>
  );
};

export default App;
