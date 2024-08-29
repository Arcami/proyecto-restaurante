const express = require('express');
const {
    createReservation,
    getReservations,
    getUserReservations,
    deleteReservation
} = require('../controllers/reservations.Controller');

const router = express.Router();

// Ruta para crear una nueva reserva
router.post('/create', createReservation);

// Ruta para obtener todas las reservas
router.get('/', getReservations);

// Ruta para obtener reservas de un usuario específico
router.get('/:id', getUserReservations);

// Ruta para eliminar una reserva
router.delete('/delete', deleteReservation);

module.exports = router;