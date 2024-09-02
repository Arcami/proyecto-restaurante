const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");
const {
  registerUser,
  login,
  getUserById,
} = require("../controllers/user.Controller");

// Ruta para registrar un usuario
router.post("/register", upload.single("picture"), registerUser);

// Ruta para el login
router.post("/login", login);

// Ruta para obtener un usuario por ID (ejemplo)
router.get("/profile", getUserById);

module.exports = router;
