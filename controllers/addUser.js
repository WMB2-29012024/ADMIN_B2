const userModel = require("../dbModels/user.model")

const addUser = async (req, res, next) => {
    const {body} = req
    const {userName, userAge} = body
    const newUser = new userModel({
        name: userName,
        age: userAge
    })
    const userData = await newUser.save()
    res.status(201).json({
        userData
    })
}

module.exports = addUser