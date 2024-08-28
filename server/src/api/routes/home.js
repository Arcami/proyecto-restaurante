const express = require('express');
const router = express.Router();
const postController = require('../controllers/post'); // Controlador 'post'

// Ruta para la página de inicio
router.get('/', postController.mostrarHome);

module.exports = router;
