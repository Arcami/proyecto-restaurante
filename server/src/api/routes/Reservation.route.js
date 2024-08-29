const express = require('express');
const {
    createReservation,
    getReservation,
    getUserReservation,
    deleteReservation
} = require('../controllers/reservations.Controller');

const router = express.Router();

// Ruta para crear una nueva reserva
router.post('/create', createReservation);

// Ruta para obtener todas las reservas
router.get('/', getReservation);

// Ruta para obtener reservas de un usuario específico
router.get('/:userId', getUserReservation);

// Ruta para eliminar una reserva
router.delete('/delete', deleteReservation);

module.exports = router;