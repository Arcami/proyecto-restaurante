const Reservation = require("../models/reservation.model");
const User = require("../models/user.model");
const Restaurant = require("../models/restaurant.model");

// Crear una nueva reserva
const createReservation = async (req, res) => {
    try {
        const { userId, restaurantId, date, numberOfGuests, contactInfo } = req.body;

        // Verificar si los IDs son válidos
        if (!userId || !restaurantId) {
            return res.status(400).json({ message: "ID de usuario y restaurante son requeridos" });
        }
        console.log(userId)
        console.log(restaurantId)

        const user = await User.find({ _id: userId });
        const restaurant = await Restaurant.find({ _id: restaurantId });
        console.log(user)
        console.log(restaurant)

        if (!user || !restaurant) {
            return res.status(404).json({ message: "Usuario o restaurante no encontrado" });
        }

        const newReservation = new Reservation({
            userId,
            restaurantId,
            date: new Date(date), // Asegúrate de que la fecha esté en un formato adecuado
            numberOfGuests,
            contactInfo
        });

        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (err) {
        console.error(err); // Log del error para depuración
        res.status(409).json({ message: "Error al crear la reserva: " + err.message });
    }
};

// Obtener todas las reservas
const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate("userId").populate("restaurantId");
        res.status(200).json(reservations);
    } catch (err) {
        res.status(404).json({ message: "Error al obtener las reservas: " + err.message });
    }
};

// Obtener las reservas de un usuario específico
const getUserReservations = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID de usuario es requerido" });
        }
        const reservations = await Reservation.find({ userId: id }).populate("userId").populate("restaurantId");
        res.status(200).json(reservations);
    } catch (err) {
        res.status(404).json({ message: "Error al obtener las reservas del usuario: " + err.message });
    }
};

// Eliminar una reserva
const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params; // Cambiado a req.params para seguir las mejores prácticas
        if (!id) {
            return res.status(400).json({ message: "ID de la reserva es requerido" });
        }
        const deleted = await Reservation.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.status(200).json({ message: "Reserva eliminada con éxito", deleted });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar la reserva: " + err.message });
    }
};

// Exportar las funciones
module.exports = {
    createReservation,
    getReservations,
    getUserReservations,
    deleteReservation
};
