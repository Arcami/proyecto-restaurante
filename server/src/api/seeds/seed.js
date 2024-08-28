const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // Ensure environment variables are loaded

const User = require("../models/user.model");
const Restaurant = require("../models/restaurant.model");
const Menu = require("../models/menu.model");
const Review = require("../models/review.model");

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await User.deleteMany({});
    await Restaurant.deleteMany({});
    await Menu.deleteMany({});
    await Review.deleteMany({});

    // Create users
    const users = await User.create([
      {
        username: "john_doe",
        password: "password123",
        picture: "john.jpg",
        role: "user",
      },
      {
        username: "jane_smith",
        password: "password123",
        picture: "jane.jpg",
        role: "user",
      },
      {
        username: "admin1",
        password: "admin123",
        picture: "admin1.jpg",
        role: "owner",
      },
      {
        username: "admin2",
        password: "admin123",
        picture: "admin2.jpg",
        role: "owner",
      },
    ]);

    // Create restaurants
    const restaurants = await Restaurant.create([
      {
        name: "Bistro Cafe",
        owner: users[2]._id,
        address: "123 Main St",
        category: "Cafe",
      },
      {
        name: "Pasta Palace",
        owner: users[2]._id,
        address: "456 Elm St",
        category: "Italian",
      },
      {
        name: "Sushi World",
        owner: users[3]._id,
        address: "789 Pine St",
        category: "Japanese",
      },
      {
        name: "Burger Joint",
        owner: users[3]._id,
        address: "101 Maple St",
        category: "American",
      },
    ]);

    // Create menus
    const menus = await Menu.create([
      {
        restaurantId: restaurants[0]._id,
        name: "Coffee",
        picture: "coffee.jpg",
        ingredients: "Coffee beans",
        price: 3.5,
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Croissant",
        picture: "croissant.jpg",
        ingredients: "Flour, butter",
        price: 2.5,
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Spaghetti",
        picture: "spaghetti.jpg",
        ingredients: "Spaghetti, tomato sauce",
        price: 12.0,
      },
      {
        restaurantId: restaurants[2]._id,
        name: "California Roll",
        picture: "california_roll.jpg",
        ingredients: "Rice, crab, avocado",
        price: 8.0,
      },
      {
        restaurantId: restaurants[3]._id,
        name: "Cheeseburger",
        picture: "cheeseburger.jpg",
        ingredients: "Beef patty, cheese, bun",
        price: 10.0,
      },
      {
        restaurantId: restaurants[3]._id,
        name: "Fries",
        picture: "fries.jpg",
        ingredients: "Potatoes, oil",
        price: 4.0,
      },
    ]);

    // Create reviews
    const reviews = await Review.create([
      {
        userId: users[0]._id,
        restaurantId: restaurants[0]._id,
        text: "Great coffee and cozy atmosphere!",
        picture: "review1.jpg",
        score: 5,
      },
      {
        userId: users[1]._id,
        restaurantId: restaurants[1]._id,
        text: "The spaghetti was a bit too bland.",
        picture: "review2.jpg",
        score: 3,
      },
      {
        userId: users[2]._id,
        restaurantId: restaurants[2]._id,
        text: "Excellent sushi, would come again.",
        picture: "review3.jpg",
        score: 4,
      },
      {
        userId: users[3]._id,
        restaurantId: restaurants[3]._id,
        text: "Burger was fantastic, but fries were cold.",
        picture: "review4.jpg",
        score: 4,
      },
    ]);

    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
