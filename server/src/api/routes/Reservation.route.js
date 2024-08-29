const express = require('express');
const {
    createReservation,
    getUserReservations,
    deleteReservation,
    getRestaurantReservations,
    editReservation
} = require('../controllers/reservation.controller');

const router = express.Router();

// Ruta para crear una nueva reserva
router.post('/create', createReservation);

// Ruta para obtener reservas de un usuario específico
router.get('/user', getUserReservations);

router.get('/restaurant', getRestaurantReservations);

router.put('/edit', editReservation);

// Ruta para eliminar una reserva
router.delete('/delete', deleteReservation);

module.exports = router;