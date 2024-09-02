import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/templates/Login.jsx";
import Register from "../components/templates/Register.jsx";
import Review from "../components/cards/reviewCard.jsx";
import ReviewFront from "../pages/reviewPage.js";
import ReservationCard from "../components/cards/reservationCard.jsx";
import Home from "../pages/Home.jsx";
import NavBar from "../components/templates/Navbar.jsx";
import Footer from "../components/templates/Footer.jsx";
import RestaurantPage from "../pages/RestaurantPage.jsx";
import ThemeProvider from "../context/ThemeContext";
import Profile from "../pages/Profile.jsx";
import ReservationForm from "../pages/ReservationForm.jsx";
import NotFound from "../components/templates/NotFound.jsx";

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
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations" element={<ReservationForm />} />{" "}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;
