const express = require("express")
const app = express()
const {userRouter} = require("./routes")
const bodyparser = require("body-parser")

require("./db.config")

const PORT = 4567;
app.use(bodyparser.json())

app.use("/users", userRouter)


app.listen(PORT)