import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../components/templates/Login';
import Register from '../components/templates/Register';
import Review from '../components/cards/reviewCard';
import Navbar from '../components/templates/navBar';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica si el token de autenticación existe

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas con Navbar */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Navbar />
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <Navbar />
              <Review />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

