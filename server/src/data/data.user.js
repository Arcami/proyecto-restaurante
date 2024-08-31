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

const user = [
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "mariaGomez",
        "password": "pass1234",
        "picture": "../../public/assets/p1.jpg",
        "role": "user"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "lauraMartinez",
        "password": "password5678",
        "picture": "../../public/assets/p2.jpg",
        "role": "user"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "juanLopez",
        "password": "password4321",
        "picture": "../../public/assets/p3.jpg",
        "role": "user"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "carlosFernandez",
        "password": "pass8765",
        "picture": "../../public/assets/p4.jpg",
        "role": "user"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "joseMartinez",
        "password": "pass3456",
        "picture": "../../public/assets/p5.webp",
        "role": "user"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "anaRuiz",
        "password": "password0987",
        "picture": "../../public/assets/p6.webp",
        "role": "user"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "isabelGarcia",
        "password": "password12345",
        "picture": "../../public/assets/p8.jpg",
        "role": "user"
    },
    {
        _id: new mongoose.Types.ObjectId(),
        "username": "miguelSanchez",
        "password": "pass5678",
        "picture": "../../public/assets/p9.jpg",
        "role": "user"
    }
    
]

module.exports = { userIds, user };
