const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Se recomienda usar ObjectId si se está relacionando con un documento en otra colección
      ref: 'users', // Referencia al modelo User, si tienes un modelo User
      required: true
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId, // Se recomienda usar ObjectId si se está relacionando con un documento en otra colección
      ref: 'restaurants', // Referencia al modelo Restaurant, si tienes un modelo Restaurant
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    numberOfGuests: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending"
    },
    contactInfo: {
      phone: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
    },
  },
  {
    collection: "reservations",
    timestamps: true,
  }
);

const Reservation = mongoose.model("reservations", reservationSchema);

module.exports = Reservation;