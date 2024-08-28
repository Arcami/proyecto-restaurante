import user from "../models/user.model"


const getUserById = async (req, res) => {
    const { id } = req.query;
    const user = await User.findById(id)
    if (!user) {
        return res.json({ message: "usuario no existe" })
    } else {
        return res.json({ data: user })
    }
}

module.exports = { getUserById}





