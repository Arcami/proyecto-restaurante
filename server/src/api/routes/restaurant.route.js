const express = require("express");
const router = express.Router();
const {
  addRestaurant,
  getRestaurantById,
  getAllRestaurants,
  getRestaurantMenu,
} = require("../controllers/restaurant.controller"); // Controlador 'post'

// Ruta para la página de restaurantes

router.get("/", getAllRestaurants);
router.get("/:restaurantId", getRestaurantById);
router.get("/new", addRestaurant);
router.get("/:restaurantId/menu", getRestaurantMenu);

module.exports = router;
