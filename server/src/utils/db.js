const mongoose = require("mongoose");
const { user, userIds } = require('../data/data.user.js');
const users = require("../api/models/user.model.js");
const { restaurante } = require("../data/data.restaurante.js")
const restaurants = require("../api/models/restaurant.model.js")
const { menu } = require("../data/data.menu.js")
const Menu = require("../api/models/menu.model.js")

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const { name, host } = db.connection;
    console.log(
      `Conectado a la base de datos "${name}" en el servidor "${host}".`
    );


  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };
