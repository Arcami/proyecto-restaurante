const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    userId: { type: String, required: true }, //modificar
    menuItems: [{ type: String, required: true }], //modificar
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;