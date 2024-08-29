const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose'); 
const helmet = require('helmet'); 
const { connectDB } = require('./src/utils/db.js')


// Rutas
const restaurantRoutes = require('./src/api/routes/restaurant.route.js');
const menuRoutes = require('./src/api/routes/menu.route.js');
const userRoutes = require('./src/api/routes/user.route.js');
const homeRoutes = require('./src/api/routes/home.route.js');
const reservationRoutes = require('./src/api/routes/Reservation.route.js'); 
const reviewRoutes = require('./src/api/routes/review.route.js'); 

// Configuración
dotenv.config();
const app = express();

// Seguridad
app.use(helmet());
app.use(cors());

// Middleware para parsing de cuerpos de solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

connectDB()

// Archivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Configuración de almacenamiento para multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/assets'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Rutas
app.use('/', homeRoutes); 
app.use('/users', userRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/menus', menuRoutes);
app.use('/reservations', reservationRoutes); 
app.use('/reviews', reviewRoutes); 

/* Conectar a la base de datos
const DB_URI = process.env.DB_URI || 'mongodb://localhost:5000/proyecto';
mongoose.connect(DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));
*/


// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
