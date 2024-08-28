const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Función para registrar un usuario
const registerUser = async (req, res) => {
    try {
        const { username, password, picture, role, reservations } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password: passwordHash, 
            picture,
            role,
            reservations,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Función para el login de un usuario
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ msg: "User does not exist." });

        const isMatch = await bcrypt.compare(password, user.password); 
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user: { ...user._doc, password: undefined } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Función para obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ msg: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    registerUser,
    login,
    getUserById
};
