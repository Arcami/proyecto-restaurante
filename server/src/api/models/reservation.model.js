const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    userId: { type: String, required: true }, 
    restaurantId: { type: String, required: true }, 
    date: { type: Date, required: true }, 
    numberOfGuests: { type: Number, required: true }, 
    status: { 
      type: String, 
      enum: ["pending", "confirmed", "cancelled"], 
      default: "pending" 
    }, 
    contactInfo: {
      phone: { type: String, required: true }, 
      email: { type: String, required: true }, 
    },
  },
  {
    collection: "reservations", // Nombre de la colección en MongoDB
    timestamps: true, 
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
