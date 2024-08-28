const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    userId: { type: String }, /* relacionarlo*/
    restaurantid: { type: String, require: true },
    text: { type: String },
    score: { type: Number },
  },
  {
    collection: "users",
    timestamps: true,
  }
);
const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
