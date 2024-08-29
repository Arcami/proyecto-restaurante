const express = require('express');
const router = express.Router();
const { authRestaurant } = require('../controllers/restaurants.controller');

// Ruta para crear un restaurante
router.post('/', authRestaurant);

module.exports = router;