const cardList = require("../dbModels/cardlist.model")
const { Types } = require("mongoose");
const userModel = require("../dbModels/user.model");

const getCardListByUserId = async (req, res, next) => {
    const { body: { card_list_name } } = req

    const cardListWithUser = await cardList
    .find({ cardListName: card_list_name })
    .populate("cardlist_user_id")

    res.status(201).json(cardListWithUser)
}

module.exports = getCardListByUserId