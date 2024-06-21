const userRouter = require("express").Router()
const addUser = require("./controllers/addUser")
const getUserByName = require("./controllers/getUserByName")
const createCard = require("./controllers/createCardList")
const getCardListByUserId = require("./controllers/getCardListByUserId")

userRouter.post("/add-user", addUser)
userRouter.get("/get-user/:username", getUserByName)

userRouter.post("/create-card", createCard)
userRouter.post("/get-cardlist-by-userid", getCardListByUserId)
module.exports = {userRouter}