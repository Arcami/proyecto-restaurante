const express = require('express');
const router = express.Router();
const postController = require('../controllers/post'); // Controlador 'post'

// Ruta para la página de restaurantes
router.get('/', postController.mostrarRestaurant);

module.exports = router;
