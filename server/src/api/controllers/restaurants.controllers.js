const bcrypt = require("bcrypt");
const Restaurant = require("../models/restaurant.model");

const authRestaurant = async (req, res) => {
    try {
        const {
            name,
            owner,
            address,
            category,
            reservations,
            menu,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newRestaurant = new Restaurant({
            name,
            owner,
            address,
            category,
            reservations,
            menu,
        });
        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getRestaurant = async (req, res) => {
    try {
        const restaurantList = await Restaurant.find();
        res.json(restaurantList)
    } catch (error) {
        console.log(error)
    }
}

const getRestaurantById = async (req, res) => {
    const { id } = req.query;
    const restaurant = await Restaurant.findById(id)
    if (!restaurant) {
        return res.json({ message: "no existe" })
    } else {
        return res.json({ data: restaurant })
    }
}

module.exports = { getRestaurant, authRestaurant, getRestaurantById }