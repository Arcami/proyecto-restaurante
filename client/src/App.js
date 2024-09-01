import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/components/templates/Login";
import Register from "../src/components/templates/Register";
import Review from "../src/components/templates/Review";
import ReviewFront from "./pages/restaurant.js";

const App = () => {
  return (
    <Router>
      <ReviewFront />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default App;
