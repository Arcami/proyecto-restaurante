const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    text: { type: String },
    picture: { type: String },
    score: { type: Number },
  },
  {
    collection: "reviews",
    timestamps: true,
  }
);
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
