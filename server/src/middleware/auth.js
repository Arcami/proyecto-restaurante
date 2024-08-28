const { verifyToken } = require("../utils/jwt");
const User = require("../api/models/user.model");

const isAuth = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Not authorized" });
  }
  if (!authorization.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid authorization format" });
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.json({ message: "Authorization token is missing" });
  }

  try {
    const tokenVerify = verifyToken(token);

    if (!tokenVerify._id) {
      return res
        .status(401)
        .json({ message: "Invalid token: User ID not found" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  try {
    const logged = await User.findById(tokenVerify._id);
    if (!logged) {
      return res.status(404).json({ message: "User not found" });
    }
    req.dataUser = logged;
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
  next();
};

module.exports = { isAuth };
