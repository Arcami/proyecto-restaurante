const express = require('express');
const router = express.Router();

const { registerUser, login, getUserById } = require("../controllers/user.Controller");

// Ruta para registrar un usuario
router.post('/register', registerUser);

// Ruta para el login
router.post('/login', login);

// Ruta para obtener un usuario por ID (ejemplo)
router.get('/profile/:id', getUserById);

module.exports = router;