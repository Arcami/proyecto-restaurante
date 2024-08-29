const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://mayravarelaparra16:010314Mj@cluster0.hgxaq.mongodb.net/proyecto?retryWrites=true&w=majority&appName=Cluster0", {
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
