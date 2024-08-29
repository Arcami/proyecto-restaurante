const { verifyToken } = require("../utils/jwt");
const User = require("../api/models/user.model");

const isAuth = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  let tokenVerify;
  try {
    tokenVerify = verifyToken(token);

    if (!tokenVerify.id) {
      return res
        .status(401)
        .json({ message: "Invalid token: User ID not found" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  try {
    const logged = await User.findById(tokenVerify.id);
    if (!logged) {
      return res.status(404).json({ message: "User not found" });
    }
    req.dataUser = logged; // Añadimos al body esta variable
    /* {
        _id: new ObjectId('66cf5ad42d177921054c66e5'),
        username: 'arnau',
        password: '$2b$10$O9OnTPfA9XMJyALM9Srmueh2lGU3Zp4C3.BmvE1E5ay3/57Yat.Oi',
        role: 'user',
        reservations: [],
        createdAt: 2024-08-28T17:13:56.715Z,
        updatedAt: 2024-08-28T17:13:56.715Z,
        __v: 0
    } */
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }

  next();
};

module.exports = { isAuth };
