const mongoose = require("mongoose");

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
const restaurante = [
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "100 montaditos",
        "owner": "John Doe",
        "picture": "../../public/assets/100-montaditos.png",
        "address": "Calle Mayor 1, Madrid",
        "category": "Spanish",
        "password": "pass1234"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "arturos",
        "owner": "Jane Smith",
        "picture": "../../public/assets/arturos.png",
        "address": "Calle Gran Via 22, Madrid",
        "category": "Fast Food",
        "password": "password"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "ater",
        "owner": "Alex Johnson",
        "picture": "../../public/assets/ater.webp",
        "address": "Calle Serrano 45, Madrid",
        "category": "Italian",
        "password": "aterpass"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "burguer king",
        "owner": "Carlos Martínez",
        "picture": "../../public/assets/burguer.png",
        "address": "Calle Alcalá 10, Madrid",
        "category": "Fast Food",
        "password": "bk12345"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "citrico",
        "owner": "Lucía Pérez",
        "picture": "../../public/assets/citrico.png",
        "address": "Calle Goya 55, Madrid",
        "category": "Mediterranean",
        "password": "citrus"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "de colores",
        "owner": "María Gómez",
        "picture": "../../public/assets/decolores.jpg",
        "address": "Calle Atocha 12, Madrid",
        "category": "Mexican",
        "password": "colors123"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "game on",
        "owner": "Luis Sánchez",
        "picture": "../../public/assets/gameon.png",
        "address": "Calle Fuencarral 9, Madrid",
        "category": "Sports Bar",
        "password": "gameon123"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "dimple",
        "owner": "Laura Fernández",
        "picture": "../../public/assets/dimple.webp",
        "address": "Calle Princesa 14, Madrid",
        "category": "Café",
        "password": "dimplepass"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "fck",
        "owner": "David López",
        "picture": "../../public/assets/fck.png",
        "address": "Calle Hortaleza 18, Madrid",
        "category": "Fast Food",
        "password": "fckpass"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "goiko",
        "owner": "Fernando Torres",
        "picture": "../../public/assets/goiko.png",
        "address": "Calle Velázquez 34, Madrid",
        "category": "Burger",
        "password": "goikopass"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "grosso napoletano",
        "owner": "Isabel Ruiz",
        "picture": "../../public/assets/grosso.jpg",
        "address": "Calle Génova 27, Madrid",
        "category": "Italian",
        "password": "grosso123"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "la bocana",
        "owner": "Raúl García",
        "picture": "../../public/assets/labocana.jpg",
        "address": "Calle Preciados 8, Madrid",
        "category": "Seafood",
        "password": "bocana123"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "la piadina",
        "owner": "Ana Hernández",
        "picture": "../../public/assets/lapiadina.jpg",
        "address": "Calle San Bernardo 15, Madrid",
        "category": "Italian",
        "password": "piadina123"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "mantel rojo",
        "owner": "Javier Morales",
        "picture": "../../public/assets/mantelrojo.webp",
        "address": "Calle Montera 20, Madrid",
        "category": "French",
        "password": "mantelrojo"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "mcdonalds",
        "owner": "Sofía Álvarez",
        "picture": "../../public/assets/mcdonalds.png",
        "address": "Calle Orense 12, Madrid",
        "category": "Fast Food",
        "password": "mcd12345"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "napolit",
        "owner": "Miguel Romero",
        "picture": "../../public/assets/napolit_tm_logo.jpg",
        "address": "Calle Castellana 50, Madrid",
        "category": "Italian",
        "password": "napolitpass"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "ricolas",
        "owner": "Elena Navarro",
        "picture": "../../public/assets/ricolas.png",
        "address": "Calle Hortaleza 32, Madrid",
        "category": "Bakery",
        "password": "ricolas123"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "seafood",
        "owner": "Andrés Martín",
        "picture": "../../public/assets/seafood.png",
        "address": "Calle Toledo 2, Madrid",
        "category": "Seafood",
        "password": "seafood123"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "starbucks",
        "owner": "Teresa Castro",
        "picture": "../../public/assets/starbucks.jpg",
        "address": "Calle Serrano 75, Madrid",
        "category": "Café",
        "password": "star12345"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "name": "telepizza",
        "owner": "Pablo Ruiz",
        "picture": "../../public/assets/telepizza.webp",
        "address": "Calle Ibiza 40, Madrid",
        "category": "Fast Food",
        "password": "telepizza123"
    }
]


module.exports = { restaurante };
