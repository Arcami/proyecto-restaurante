const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "1h" }); // Devuelve el token en forma de string
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.error("Token verification error:", err.message);
    throw new Error("Invalid or expired token");
  }
};

module.exports = { generateToken, verifyToken };
