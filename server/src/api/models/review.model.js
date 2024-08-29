const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    restaurantId: { type: String },//cambiar a type object y poner required
    text: { type: String, required: true },
    score: { type: Number, required: true, min: 1, max: 5 }

}, {
    collection: "reviews",
    timestamps: true
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;