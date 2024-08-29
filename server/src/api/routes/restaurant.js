const express = require('express');
const router = express.Router();
const { getRestaurant, getRestaurantById } = require('../controllers/restaurants.controllers'); // Controlador 'post'

// Ruta para la página de restaurantes
router.get('/', getRestaurant);

module.exports = router;
