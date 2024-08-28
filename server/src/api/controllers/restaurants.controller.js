const bcrypt = require('bcrypt');
const Restaurant = require('../models/restaurant.model');

exports.authRestaurant = async (req, res) => {
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
