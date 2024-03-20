const express = require("express")
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')

//connecting databse
const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/authentication')
        app.listen(4000, () => console.log("Database connected"))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
dbConnect()

const app = express()
app.use(express.json())
app.use('/', require('./routes/authRoutes'))
