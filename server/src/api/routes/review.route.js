const express = require('express');
const router = express.Router();
const {
    createReview,
    getAllReviews,
    getUserReviews,
    getRestaurantReviews,
    likeReview,
    deleteReview
} = require('../controllers/review.controller');

// Ruta para crear una nueva reseña
router.post('/', createReview);

// Ruta para obtener todas las reseñas
router.get('/', getAllReviews);


// Ruta para obtener las reseñas de un restaurante
router.get('/restaurant/:restaurantId', getRestaurantReviews);

// Ruta para añadir o quitar un like de una reseña
router.patch('/like/:id', likeReview);

// Ruta para eliminar una reseña
router.delete('/:id', deleteReview);

module.exports = router;
