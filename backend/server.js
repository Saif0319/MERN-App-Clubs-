const express = require("express")
require("dotenv").config()
const clubRoutes = require("./routes/clubs")
const mongoose = require("mongoose")
const cors = require('cors')

//Express app
const app = express()


//Middlewares
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})
app.use(cors());

app.use(express.json())


//Routes
app.use("/api/clubs", clubRoutes)

//Connect to Database
mongoose.set("strictQuery", false); //Deprication warning
mongoose.connect(process.env.URI)
.then(() => {
    //Listen for requests
    app.listen(process.env.PORT, () => {
        console.log("Listening to PORT", process.env.PORT)
    })
})

.catch((err) => console.log(err))

