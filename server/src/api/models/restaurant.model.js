const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: { type: String, required: true, unique: true },
    owner: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    reservations: [{ type: Schema.Types.ObjectId, ref: "Reservation" }],
    menu: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
    password: { type: String, required: true },
}, {
    collection: "restaurants",
    timestamps: false
});

const Restaurant = mongoose.model('restaurants', restaurantSchema);


module.exports = Restaurant;