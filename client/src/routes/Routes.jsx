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
import ThemeProvider from "../context/ThemeContext";
import Profile from "../pages/Profile.jsx";
import ReservationForm from "../pages/ReservationForm.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review" element={<Review />} />
          <Route path="/restaurantlist" element={<RestaurantList />} />
          <Route path="/reservationcard" element={<ReservationCard />} />
          <Route path="/reviewfront" element={<ReviewFront />} />
          <Route path="/restaurantcard" element={<RestaurantCard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations/:id?" element={<ReservationForm />} />{" "}
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;
