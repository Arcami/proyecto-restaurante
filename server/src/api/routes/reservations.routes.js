const express = require('express');
const router = express.Router();
const { createReservation, getReservation, getUserReservation, deleteReservation } = require('../controllers/reservations.controller'); // Controlador 'post'

// Ruta para la página de restaurantes
router.get('/createReservation', createReservation);
router.get('/getReservation', getReservation);
router.get('/getUserReservation', getUserReservation);
router.get('/delete', deleteReservation)

module.exports = router;