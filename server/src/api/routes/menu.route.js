const express = require('express');
const router = express.Router();
const { getMenu, createOrder } = require('../controllers/menu.controller');

// Ruta para obtener el menú del restaurante
router.get('/', getMenu);

// Ruta para hacer un pedido
router.post('/order', createOrder);

module.exports = router;

