const bcrypt = require("bcrypt");
const Restaurant = require("../models/restaurant.model");
const Menu = require("../models/menu.model");

const addRestaurant = async (req, res) => {
  try {
    const { name, owner, address, category, reservations, menu } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newRestaurant = new Restaurant({
      name,
      owner,
      address,
      category,
      reservations,
      menu,
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
  const { id } = req.params;
  const restaurant = await Restaurant.findById(id);
  if (!restaurant) {
    return res.json({ message: "no existe" });
  } else {
    return res.json({ data: restaurant });
  }
};

const getRestaurantMenu = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const restaurant = await Restaurant.findById(restaurantId).populate("menu");

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json({ menu: restaurant.menu });
  } catch (error) {
    console.error("Error fetching restaurant menu:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addRestaurant,
  getAllRestaurants,
  getRestaurantById,
  getRestaurantMenu,
};
