const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getUserById,
} = require("../controllers/user.controller");
const upload = require("../../middleware/upload");

router.post("/login", login);
router.post("/register", upload.single("image"), register);
router.get("/:id", getUserById);

module.exports = router;
