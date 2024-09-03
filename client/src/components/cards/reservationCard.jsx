import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RestaurantReservationCard = ({ reservation = {} }) => {
  // Destructura con valores predeterminados para evitar errores si reservation es undefined
  const {
    contactInfo: { guestName = "Invitado", phone = "No disponible" } = {},
    date = "No disponible",
    numberOfGuests = "No disponible",
    status = "Desconocido",
  } = reservation;

  return (
    <div className="card mb-3 shadow-sm" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="card-body text-center">
        <h5 className="card-title" style={{ color: "#C32C23" }}>
          Reserva de {guestName}
        </h5>
        <p className="card-text">
          <strong style={{ color: "#C32C23" }}>Fecha:</strong>{" "}
          {new Date(date).toLocaleDateString()}
        </p>
        <p className="card-text">
          <strong style={{ color: "#C32C23" }}>Número de Invitados:</strong>{" "}
          {numberOfGuests}
        </p>
        <p className="card-text">
          <strong style={{ color: "#C32C23" }}>Estado:</strong>{" "}
          <span className={`badge bg-${getStatusColor(status)}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </p>
        <p className="card-text">
          <strong style={{ color: "#C32C23" }}>Teléfono de Contacto:</strong>{" "}
          {phone}
        </p>
      </div>
    </div>
  );
};

// Función para asignar color según el estado
const getStatusColor = (status) => {
  switch (status) {
    case "confirmed":
      return "success"; // verde
    case "pending":
      return "danger"; // rojo
    case "cancelled":
      return "danger"; // rojo
    default:
      return "secondary"; // gris
  }
};

export default RestaurantReservationCard;
