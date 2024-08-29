const User = require("../models/user.model");
const Reservation = require("../models/reservation.model");
const Restaurant = require("../models/restaurant.model");

export const createReservation = async (req, res) => {
  try {
    const { userId, restaurantId, date, numberOfGuests, contactInfo } =
      req.body;

    if (!userId || !restaurantId || !date || !numberOfGuests || !contactInfo) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newReservation = new Reservation({
      userId,
      restaurantId,
      date,
      numberOfGuests,
      contactInfo,
    });

    const savedReservation = await newReservation.save();

    res.status(201).json(savedReservation);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Revisar esta
export const getUserReservation = async (req, res) => {
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
  const deleted = await Reservation.findByIdAndDelete(id);
  if (!deleted) {
    return res.json({ message: "No reservation found" });
  }

  return res.status(200).json(deleted);
};

module.exports = {
  createReservation,
  getAllReservations,
  getUserReservation,
  deleteReservation,
};
