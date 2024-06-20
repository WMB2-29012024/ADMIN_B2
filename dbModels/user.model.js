const schema = require("mongoose").Schema
const model = require("mongoose").model

const userSchema = new schema({
    name: { type: String },
    age: { type: Number }
})

const userModel = model("user", userSchema)
module.exports = userModel
