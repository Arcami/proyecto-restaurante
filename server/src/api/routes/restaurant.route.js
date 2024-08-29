const express = require('express');
const router = express.Router();
const { authRestaurant, getAllRestaurants  } = require('../controllers/restaurants.controller');

// Ruta para crear un restaurante
router.post('/restaurante/register', authRestaurant);

// Ruta para obtener todos los restaurantes
router.get('/', getAllRestaurants);

module.exports = router;
