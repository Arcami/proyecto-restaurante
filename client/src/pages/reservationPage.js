import React from 'react';
import ReservationCard from '../components/cards/reservationCard';

const reservation = {
  contactInfo: { guestName: 'Juan Pérez', phone: '694678045' }, 
  date: '2023-09-15T19:00:00.000Z', 
  numberOfGuests: 4, 
  totalAmount: 120.50, 
  status: 'confirmada', 
};

const App = () => {
  return (
    <div className="container mt-4">
      <h1>Detalles de la Reserva</h1>
      <ReservationCard reservation={reservation} /> {/* Muestra la tarjeta de la reserva */}
    </div>
  );
};

export default App;
