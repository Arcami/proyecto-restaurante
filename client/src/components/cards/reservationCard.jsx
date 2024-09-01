import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ReservationCard = ({ reservation }) => {
  const {
    contactInfo: { guestName, phone },
    date,
    numberOfGuests,
    totalAmount,
    status,
  } = reservation;

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Reserva de {guestName}</h5>
        <p className="card-text">
          <strong>Fecha:</strong> {new Date(date).toLocaleDateString()}
        </p>
        <p className="card-text">
          <strong>Número de Invitados:</strong> {numberOfGuests}
        </p>
        <p className="card-text">
          <strong>Total a Pagar:</strong> €{totalAmount.toFixed(2)}
        </p>
        <p className="card-text">
          <strong>Estado:</strong>{" "}
          <span className={`badge bg-${getStatusColor(status)}`}>{status}</span>
        </p>
        <p className="card-text">
          <strong>Teléfono de Contacto:</strong> {phone}
        </p>
      </div>
    </div>
  );
};

// Función para asignar color según el estado
const getStatusColor = (status) => {
  switch (status) {
    case "confirmada":
      return "success";
    case "pendiente":
      return "warning";
    case "cancelada":
      return "danger";
    default:
      return "secondary";
  }
};

export default ReservationCard;
