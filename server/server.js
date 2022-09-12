const express = require('express')
const cors = require('cors');
const connectDB = require('./config/database')
const app = express()
const PORT = 5000;
const categoryRoute = require('./routes/categoryRoute')
require('dotenv').config({path: './config/.env'})

app.use(cors());

//run function to connect to mongoDB database
connectDB()

//middleware to allow POST requests to recieve string or array data from form and JSON data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//
app.use('/', categoryRoute)

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
})