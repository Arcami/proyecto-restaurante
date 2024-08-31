import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/Profile';
import Login from '../components/templates/Login';
import Register from '../components/templates/Register';
import Review from '../components/templates/Review';
import Navbar from '../components/templates/navBar'; 

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica si el token de autenticación existe

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      {localStorage.getItem('authToken') && <Navbar />} {/* Mostrar el Navbar solo si el usuario está autenticado */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rutas protegidas */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
