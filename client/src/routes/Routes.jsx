// AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/templates/Login";
import Register from "../components/templates/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Review from "../pages/reviewPage";
import Navbar from "../components/templates/navBar";
import ThemeProvider from "../context/ThemeContext"; // Adjust the path as necessary

const AppRoutes = () => {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas privadas */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
          <Route
            path="/review"
            element={
              <>
                <Navbar />
                <Review />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;
