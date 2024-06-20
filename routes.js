const userRouter = require("express").Router()
const addUser = require("./controllers/addUser")
const getUserByName = require("./controllers/getUserByName")

userRouter.post("/add-user", addUser)
userRouter.get("/get-user/:username", getUserByName)
module.exports = {userRouter}