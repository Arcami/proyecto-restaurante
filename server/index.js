const express = require("express")
const routerUser = require("./src/api/routes/user.js");
const router = require("./src/api/routes/restaurant.js");
const routerRestaurantMenu = require("./src/api/routes/restaurantMenu.js");


const server = express();
const PORT = process.env.PORT;
const { connectDB } = require("./src/utils/db.js");
connectDB();

server.use(express.json())
server.use("/", router)
server.use("/user", routerUser)

const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const { fileURLToPath } = require('url');

/* ROUTES */



/* CONTROLLERS */




/* CONFIGURATIONS */

dotenv.config();

const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Static Files
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/assets'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Routes


server.listen(PORT, () => {
  console.log(`listen port http://localhost:${PORT} `)
})



/*cambiar el nombre de los archivos especificando que es en routes y controladores

modificiar o ajustar errores de sintaxis de los require

llevar las funciones de auth a user

probar todo en la terminal y probar las rutas en postman/thunderclient */

