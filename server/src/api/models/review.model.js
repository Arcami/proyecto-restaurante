const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    id: { type: String, require: true },
    username: { type: String, require: true },
    restaurantid: { type: String, require: true },
    text: { type: String },
    picture: { type: String },
    score: { type: Number },
  },
  {
    collection: "users",
    timestamps: true,
  }
);
const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
