const express = require ("express")

const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const { fileURLToPath } = require('url');

/* ROUTES */

const restaurantRoutes = require('./src/api/routes/restaurant.js');
const menuRoutes = require('./src/api/routes/menu.js');
const userRoutes = require('./src/api/routes/user.js');
const homeRoutes = require('./src/api/routes/home.js');

/* CONTROLLERS */

const  { authUser } from './src/api/controllers/user.js';



/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
app.use('/', homeRoutes); // Home route
app.use('/users', userRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/menus', menuRoutes);
app.use('/reservations', reservationRoutes);
app.use('/reviews', reviewRoutes);

/* AUTH ROUTES */
app.post('/login/register', upload.single('picture'), authUser); 


/*cambiar el nombre de los archivos especificando que es en routes y controladores

modificiar o ajustar errores de sintaxis de los require

llevar las funciones de auth a user

probar todo en la terminal y probar las rutas en postman/thunderclient */

