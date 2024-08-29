const getMenu = async (req, res) => {
    // aqui es donde se usará el modelo de datos
    try {
        const menuList = await menu.find();
        res.json(menuList)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getMenu }