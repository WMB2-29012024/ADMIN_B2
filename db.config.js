const mongoose = require("mongoose")
const MONGODB_URI = "mongodb+srv://yash:yash123@farzi-cluster.l3ob6ss.mongodb.net/kanban-board?retryWrites=true&w=majority&appName=farzi-cluster"

mongoose.connect(MONGODB_URI).then(mongoObj => console.log("Connected to the DB"))

// module.exports = mongoose