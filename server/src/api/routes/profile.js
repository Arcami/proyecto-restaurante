const express = require('express');
const router = express.Router();
const userController = require('../controllers/user'); // Controlador 'user'

// Ruta para la página de perfil
router.get('/', userController.mostrarProfile);

module.exports = router;
