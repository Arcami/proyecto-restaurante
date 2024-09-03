const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");
const {
  registerUser,
  login,
  getUserById,
  editUser,
} = require("../controllers/user.Controller");

// Ruta para registrar un usuario
router.post("/register", registerUser);

// Ruta para el login
router.post("/login", login);

// Editar usuario
router.put("/edit", upload.single("picture"), editUser);

// Ruta para obtener un usuario por ID (ejemplo)
router.get("/profile", getUserById);

module.exports = router;
