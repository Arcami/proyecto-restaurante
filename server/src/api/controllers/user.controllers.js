const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const registerUser = async (req, res) => {
    try {
        const {
            username,
            password,
            picturePath,
            role,
            reservations,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            password,
            picturePath,
            role,
            reservations,
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
        if (!username) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch = await bcrypt.compare(password, username.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteUser = async (req, res) => {
    // id del usuario que quiero eliminar, query
    const { id } = req.query;
    // findByIdAndDelete
    const deleted = await User.findByIdAndDelete(id)
    if (!deleted) {
        return res.json({ message: "el id no existe" })
    }

    return res.json(deleted)
}

const getUserById = async (req, res) => {
    const { id } = req.query;
    const user = await User.findById(id)
    if (!user) {
        return res.json({ message: "usuario no existe" })
    } else {
        return res.json({ data: user })
    }
}

module.exports = { registerUser, login, deleteUser, getUserById }





