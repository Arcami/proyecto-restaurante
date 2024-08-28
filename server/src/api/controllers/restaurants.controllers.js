import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authRestaurant = async (req, res) => {
    try {
        const {
            name,
            owner,
            address,
            category,
            reservations,
            menu,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newRestaurant = new Restaurant({
            name,
            owner,
            address,
            category,
            reservations,
            menu,
        });
        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
