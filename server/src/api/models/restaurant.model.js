const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    reservations: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
    menu: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
  },
  {
    collection: "restaurants",
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
