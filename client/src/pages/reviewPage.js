import React from "react";
import ReviewCard from "../components/cards/reviewCard.jsx"; // Asegúrate de que la ruta sea correcta



const review = {
  userId: { name: "Juan Pérez" }, 
  text: "La comida estuvo excelente, pero el servicio podría mejorar.",
  score: 4, 
  createdAt: "2023-08-25T12:34:56.789Z", 
};

const ReviewPage = () => {
  return (
    <div className="container mt-4">
      <h1>Reseña</h1>
      <ReviewCard review={review} /> {/* Muestra una tarjeta de reseña */}
    </div>
  );
};

export default ReviewPage;
