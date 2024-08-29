const Review = require("../models/review.model");
const User = require("../models/user.model");
const Restaurant = require("../models/restaurant.model");

// Crear una nueva reseña
const createReview = async (req, res) => {
    try {
        const { userId, restaurantId, text, score } = req.body;

        // Validar que el usuario y el restaurante existan
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });

        const newReview = new Review({
            userId,
            restaurantId,
            text,
            score
        });

        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

// Leer todas las reseñas
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Leer reseñas de un usuario
const getUserReviews = async (req, res) => {
    try {
        const { userId } = req.params;
        const reviews = await Review.find({ userId });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Leer reseñas de un restaurante
const getRestaurantReviews = async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const reviews = await Review.find({ restaurantId });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Actualizar reseña (para añadir likes)
const likeReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body; // Cambié de username a userId para consistencia

        const review = await Review.findById(id);
        if (!review) return res.status(404).json({ message: "Review not found" });

        // Manejo de likes
        if (review.likes.includes(userId)) {
            review.likes = review.likes.filter(like => like !== userId);
        } else {
            review.likes.push(userId);
        }

        const updatedReview = await Review.findByIdAndUpdate(
            id,
            { likes: review.likes },
            { new: true }
        );

        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// Eliminar una reseña
const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await Review.findByIdAndDelete(id);
        if (!deletedReview) return res.status(404).json({ message: "Review not found" });
        res.status(200).json({ message: "Review deleted successfully", deletedReview });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createReview,
    getAllReviews,
    getUserReviews,
    getRestaurantReviews,
    likeReview,
    deleteReview
};
