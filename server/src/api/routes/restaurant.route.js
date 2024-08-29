const express = require("express");
const router = express.Router();
const { isAuth } = require("../../middleware/authorization");
const {
  addRestaurant,
  getRestaurantById,
  getAllRestaurants,
  getRestaurantMenu,
  deleteRestaurant,
} = require("../controllers/restaurant.controller");

// Ruta para la página de restaurantes

router.get("/", getAllRestaurants);
router.get("/:restaurantId", getRestaurantById);
router.post("/new", addRestaurant);
router.get("/:restaurantId/menu", getRestaurantMenu);
router.delete("/:restaurantId", deleteRestaurant);

module.exports = router;
