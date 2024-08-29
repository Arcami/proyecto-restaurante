const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/user.controller");
const upload = require("../../middleware/upload");

router.post("/login", login);
router.post("/register", upload.single("image"), register);

module.exports = router;
