const schema = require("mongoose").Schema
const model = require("mongoose").model

const userSchema = new schema({
    name: { type: String },
    age: { type: Number },
    password: { type: String, required: true},
    address: {
        line1: { type: String, required: true },
        line2: { type: String },
        city: { type: String, enums: ["Bhopal", "Raisen"] }
    }
})
const userModel = model("user", userSchema)
module.exports = userModel
