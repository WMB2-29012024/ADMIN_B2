const userModel = require("../dbModels/user.model")

const getUserByName = async (req, res, next) => {
    const {params} = req
    const {username} = params
    const user = await userModel.find({ name: username})
    if (user.length) {
        res.status(200).json({
            user
        })
    } else {
        res.status(401).json({
            message: "User does not exist"
        })
    }
}

module.exports = getUserByName