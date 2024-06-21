const cardList = require("../dbModels/cardlist.model")
const {Types} = require("mongoose")

const createCardList = async (req, res, next) => {
    const { body: { user_id, cardListName } } = req
    console.log({user_id});
    const cardListObj = new cardList({
        cardListName: cardListName,
        cardlist_user_id: new Types.ObjectId(user_id)
    })
    await cardListObj.save()
    res.status(201).json(cardListObj)
}

module.exports = createCardList