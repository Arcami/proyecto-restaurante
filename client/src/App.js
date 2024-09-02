import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/components/templates/Login";
import Register from "../src/components/templates/Register";
import Review from "./components/cards/reviewCard.jsx";
import ReservationCard from "./components/cards/reservationCard.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "../src/components/templates/Navbar.jsx";
import { ThemeProvider } from "../src/context/ThemeContext.js";


const App = () => {
  return (
<<<<<<< Updated upstream

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
      </Routes>

    </Router>
=======
    <><ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review" element={<Review />} />
          <Route path="/reservation" element={<ReservationCard />} />
        </Routes>
      </Router>
    </ThemeProvider></>
>>>>>>> Stashed changes
  );
};

export default App;
