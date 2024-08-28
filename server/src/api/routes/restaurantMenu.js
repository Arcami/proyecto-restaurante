const express = require('express');
const router = express.Router();
const postController = require('../controllers/post'); // Controlador 'post'

// Ruta para el menú del restaurante
router.get('/', postController.mostrarRestaurantMenu);

module.exports = router;
