const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 8080
const foodstuff = require("./routes/foodstuff")

app.use(cors())
app.use(bodyParser.json())

app.use("/foodstuff", foodstuff)

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})