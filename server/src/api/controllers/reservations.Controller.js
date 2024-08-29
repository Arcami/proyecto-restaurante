const Reservation = require("../models/reservation.model");
const User = require("../models/user.model");
const Restaurant = require("../models/restaurant.model");

// Crear una nueva reserva
const createReservation = async (req, res) => {
    try {
        const { userId, restaurantId, date, numberOfGuests, contactInfo } = req.body;

        const user = await User.findById(userId);
        const restaurant = await Restaurant.findById(restaurantId);

        if (!user || !restaurant) {
            return res.status(404).json({ message: "Usuario o restaurante no encontrado" });
        }

        const newReservation = new Reservation({
            userId,
            restaurantId,
            date,
            numberOfGuests,
            contactInfo
        });

        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

// Obtener todas las reservas
const getReservation = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Obtener las reservas de un usuario específico
const getUserReservation = async (req, res) => {
    try {
        const { userId } = req.params;
        const reservations = await Reservation.find({ userId });
        res.status(200).json(reservations);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Eliminar una reserva
const deleteReservation = async (req, res) => {
    try {
        const { id } = req.query;
        const deleted = await Reservation.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.status(200).json({ message: "Reserva eliminada con éxito", deleted });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Exportar las funciones
module.exports = {
    createReservation,
    getReservation,
    getUserReservation,
    deleteReservation
};

