import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/components/templates/Login";
import Register from "../src/components/templates/Register";
import ReviewCard from "./components/cards/reviewCard.jsx";
import ReviewPage from "./pages/reviewPage.js";
import ReservationCard from "./components/cards/reservationCard.jsx";
import ReservationPage from "./pages/reservationPage.js";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviewCard" element={<ReviewCard />} />
        <Route path="/reviewPage" element={<ReviewPage />} />
        <Route path="/reservation" element={<ReservationCard />} />
        <Route path="/reservationpage" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
