const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./src/utils/db");
const { isAuth } = require("./src/middleware/authorization");

dotenv.config();

const app = express();

app.use(express.json());

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
