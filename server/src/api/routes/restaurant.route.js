const express = require('express');
const router = express.Router();
const { authRestaurant, getAllRestaurants, getRestaurantById } = require('../controllers/restaurants.controller');

// Ruta para crear un restaurante
router.post('/register', authRestaurant);

// Ruta para obtener todos los restaurantes
router.get('/all', getAllRestaurants);

// Ruta para obtener un restaurante por id
router.get('/', getRestaurantById);

module.exports = router;