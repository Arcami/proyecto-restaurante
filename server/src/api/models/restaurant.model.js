const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: { type: String, require: true, unique: true },
    owner: { type: String, require: true, unique: true },
    address: { type: String, require: true },
    category: {type: String, require: true},
    reservations: [{ type: Schema.Types.ObjectId, ref: "reservation" }],
    menu: [{ type: Schema.Types.ObjectId, ref: "menu" }],
    
    
},
    {
        collection: "restaurants",
        timestamps: false
    })
const Restaurant = mongoose.model("restaurants", restaurantSchema)
module.exports = Restaurant;