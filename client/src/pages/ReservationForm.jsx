import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const [reservation, setReservation] = useState({
    userId: "",
    restaurantId: "",
    date: "",
    numberOfGuests: "",
    menuItems: "",
    totalAmount: "",
    status: "pending",
    contactInfo: {
      phone: "",
      guestName: "",
    },
  });

  const { id } = useParams(); // Para obtener el ID de la reserva si se está editando
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtener el token desde localStorage

    if (id) {
      // Si hay un ID, obtener los detalles de la reserva para editar
      fetch(`/reservations/user?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setReservation({
            userId: data.userId,
            restaurantId: data.restaurantId,
            date: new Date(data.date).toISOString().slice(0, 16),
            numberOfGuests: data.numberOfGuests,
            menuItems: data.menuItems.join(","),
            totalAmount: data.totalAmount,
            status: data.status,
            contactInfo: {
              phone: data.contactInfo.phone,
              guestName: data.contactInfo.guestName,
            },
          });
        })
        .catch((error) => console.error("Error fetching reservation:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" || name === "guestName") {
      setReservation((prev) => ({
        ...prev,
        contactInfo: {
          ...prev.contactInfo,
          [name]: value,
        },
      }));
    } else if (name === "menuItems") {
      setReservation((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()), // Convert string to array
      }));
    } else {
      setReservation((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url = id ? `/reservations/edit` : `/reservations/create`;
    const method = id ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...reservation,
        menuItems: reservation.menuItems, // Already an array, so no need to convert
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Reserva guardada exitosamente.");
          navigate("/");
        } else {
          throw new Error("Error saving reservation");
        }
      })
      .catch((error) => console.error("Error saving reservation:", error));
  };

  return (
    <div>
      <h1>{id ? "Editar Reserva" : "Crear Reserva"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID del Usuario:
          <input
            type="text"
            name="userId"
            value={reservation.userId}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          ID del Restaurante:
          <input
            type="text"
            name="restaurantId"
            value={reservation.restaurantId}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Fecha y Hora:
          <input
            type="datetime-local"
            name="date"
            value={reservation.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Número de Invitados:
          <input
            type="number"
            name="numberOfGuests"
            value={reservation.numberOfGuests}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Items del Menú (ID separados por coma):
          <input
            type="text"
            name="menuItems"
            value={reservation.menuItems}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Monto Total:
          <input
            type="number"
            name="totalAmount"
            value={reservation.totalAmount}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Estado:
          <select
            name="status"
            value={reservation.status}
            onChange={handleChange}
          >
            <option value="pending">Pendiente</option>
            <option value="confirmed">Confirmado</option>
            <option value="cancelled">Cancelado</option>
          </select>
        </label>
        <br />

        <label>
          Teléfono de Contacto:
          <input
            type="text"
            name="phone"
            value={reservation.contactInfo.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Nombre del Huésped:
          <input
            type="text"
            name="guestName"
            value={reservation.contactInfo.guestName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Guardar Reserva</button>
      </form>
    </div>
  );
};

export default ReservationForm;
