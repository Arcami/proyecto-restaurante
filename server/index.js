const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./src/utils/db");
const cloudinary = require("cloudinary").v2;
const { swaggerUi, specs } = require("./src/swagger");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

connectDB();

const userRoutes = require("./src/api/routes/user.route");
const restaurantRoutes = require("./src/api/routes/restaurant.route");

app.use("/user", userRoutes);
app.use("/restaurants", restaurantRoutes); // Protected route

app.get("/", (req, res) => {
  res.send("API del restaurante");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
