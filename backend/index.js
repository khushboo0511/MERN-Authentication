const express = require("express")
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')

//connecting databse
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(4000, () => console.log("Database connected"))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
dbConnect()

const app = express()

app.use('/', require('./routes/authRoutes'))

const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))
