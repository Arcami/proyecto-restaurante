const express = require('express');
const router = express.Router();

const { getUserById, registerUser} = require("../controllers/user")

// Ruta para la página de perfil
router.get('/', registerUser);
router.get('/profile', getUserById);

module.exports = router;
