const Restaurant = require("../models/restaurant.model");
const Menu = require("../models/menu.model");

const addRestaurant = async (req, res) => {
  // TODO: modificar para que el owner sea el mismo usuario que envía la petición
  try {
    const { name, owner, address, category } = req.body;

    const newRestaurant = new Restaurant({
      name,
      owner,
      address,
      category,
      // reservations,
      // menu,
    });
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurantList = await Restaurant.find();
    res.json(restaurantList);
  } catch (error) {
    console.log(error);
  }
};

const getRestaurantById = async (req, res) => {
  const { restaurantId } = req.params;
  console.log;
  const restaurant = await Restaurant.findById(restaurantId);
  if (!restaurant) {
    return res.json({ message: "No restaurant found" });
  } else {
    return res.json({ restaurant });
  }
};

const getRestaurantMenu = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId).populate("menu");

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(restaurant.menu);
  } catch (error) {
    console.error("Error fetching restaurant menu:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteRestaurant = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    if (!deletedRestaurant) {
      res.status(404).json({
        message: "No restaurant found for that ID",
      });
    }
    res.status(200).json(deletedRestaurant);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
    console.log(error);
  }
};

module.exports = {
  addRestaurant,
  getAllRestaurants,
  getRestaurantById,
  getRestaurantMenu,
  deleteRestaurant,
};
