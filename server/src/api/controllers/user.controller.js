const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { username, password, role, reservations } = req.body;
    console.log(role);
    console.log(reservations);

    console.log(req.file.path);

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      picturePath: req.file && req.file.path ? req.file.path : null,
      // role,
      // reservations,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.json({ message: "User not found" });
  } else {
    return res.json({ data: user });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);

    if (users.length === 0) {
      return res.json({ message: "Could not find any user" });
    } else {
      return res.json({ data: users });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching users" });
  }
};

module.exports = {
  register,
  login,
  getUserById,
  getAllUsers,
};
