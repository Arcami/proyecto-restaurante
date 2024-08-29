const express = require('express');
const router = express.Router();
const { getMenu } = require('../controllers/menu.controller'); // Controlador 'post'

// Ruta para el menú del restaurante
router.get('/', getMenu);

module.exports = router;
