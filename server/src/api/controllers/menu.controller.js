const Menu = require('../models/menu.model');
const Order = require('../models/order.model');

// Obtener el menú
const getMenu = async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.status(200).json(menuItems);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Crear una nueva orden
const createOrder = async (req, res) => {
    try {
        const { userId, menuItems, totalAmount } = req.body;

        const newOrder = new Order({
            userId,
            menuItems,
            totalAmount,
            status: 'pending',
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getMenu,
    createOrder
};
