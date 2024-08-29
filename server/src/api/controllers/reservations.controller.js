

const Reservation = require("../models/reservation");
const User = require("../models/user.model");
const Restaurant = require("../models/restaurant.model");


const createReservation = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await User.findById(userId);
        const newReservation = new Reservation({
            username
        });
        await newReservation.save();

        const reservation = await Reservation.find();
        res.status(201).json(reservation);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

/* READ */
const getReservation = async (req, res) => {
    try {
        const reservation = await Reservation.find();
        res.status(200).json(reservation);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getUserReservation = async (req, res) => {
    try {
        const { username } = req.params;
        const reservation = await Reservation.find({ username });
        res.status(200).json(reservation);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const deleteReservation = async (req, res) => {
    const { id } = req.query;
    const deleted = await Reservation.findByIdAndDelete(id)
    if (!deleted) {
        return res.json({ message: "la reserva no existe" })
    }

    return res.json(deleted)
}
module.exports = { createReservation, getReservation, getUserReservation, deleteReservation }
