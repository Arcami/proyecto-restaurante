const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, require: true },
    username: { type: String, require: true },
    picture: { type: String },
    role: { type: String, require: true, enum: ["user", "owner"], default: "user" },
    reservations: [{ type: Schema.Types.ObjectId, ref: "reservation" }]
}, {
    collection: "users"
})
const User = mongoose.model("users", userSchema)
module.exports = User;