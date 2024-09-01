// ReservationForm.js
import React, { useState } from 'react';

const ReservationForm = ({ restaurant }) => {
    const [userId, setUserId] = useState(''); // User ID fijado para la demo
    const [date, setDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [status, setStatus] = useState(''); // Estado inicial "pending"
    const [phone, setPhone] = useState('');
    const [guestName, setGuestName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reservationData = {
            userId,
            restaurantId: restaurant._id,
            date,
            numberOfGuests,
            status,
            contactInfo: {
                phone,
                guestName
            }
        };

        try {
            const response = await fetch('http://localhost:5000/reservations/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                alert('Reserva realizada con éxito');
            } else {
                alert('Error al realizar la reserva');
            }
        } catch (error) {
            console.error('Error al enviar la reserva:', error);
        }
    };

    return (
        <div>
            <h3>Reserva en {restaurant.name}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Fecha:</label>
                    <input
                        type="datetime-local"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Número de personas:</label>
                    <input
                        type="number"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        required
                        min="1"
                    />
                </div>
                <div>
                    <label>Teléfono de contacto:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nombre del huésped:</label>
                    <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reservar</button>
            </form>
        </div>
    );
};

export default ReservationForm;
