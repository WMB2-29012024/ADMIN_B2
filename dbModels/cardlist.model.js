const userModel = require("./user.model")
const schema = require("mongoose").Schema
const model = require("mongoose").model

const cardListSchema = new schema({
    cardListName: { type: String },
    cardlist_user_id: { type: schema.Types.ObjectId, ref: "user" }
})
const cardList = model("cardlist", cardListSchema)
module.exports = cardList
