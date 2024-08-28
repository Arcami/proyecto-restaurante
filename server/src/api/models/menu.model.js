const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    name: { type: String },
    picture: { type: String },
    ingredients: { type: String },
    price: { type: Number },
  },
  {
    collection: "menu",
    timestamps: true,
  }
);

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
