const bcrypt = require('bcrypt');
const Restaurant = require('../models/restaurant.model');

// Función para autenticar un restaurante
const authRestaurant = async (req, res) => {
    try {
        const {
            name,
            owner,
            address,
            category,
            reservations,
            menu,
            password
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
            password: passwordHash
        });

        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Función para obtener todos los restaurantes
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    authRestaurant,
    getAllRestaurants
};
