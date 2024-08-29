const express = require('express');
const router = express.Router();
const { getMenu, createOrder, updateOrder, deleteOrder } = require('../controllers/menu.controller');

// Ruta para obtener el menú del restaurante
router.get('/menu', getMenu);

// Ruta para hacer un pedido
router.post('/order', createOrder);


// Ruta para editar un pedido existente
router.put('/order/:id', updateOrder);

// Ruta para eliminar un pedido existente
router.delete('/order/:id', deleteOrder);


module.exports = router;

