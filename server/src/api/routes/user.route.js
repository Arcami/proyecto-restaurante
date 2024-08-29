const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getUserById,
  getAllUsers,
} = require("../controllers/user.controller");
const upload = require("../../middleware/upload");

router.post("/login", login);
router.post("/register", upload.single("image"), register);
router.get("/all", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
