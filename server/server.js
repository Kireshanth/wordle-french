const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const cors = require('cors');
const connectDB = require('./config/database')
const app = express()
const PORT = 5000;
const categoryRoute = require('./routes/categoryRoute')
require('dotenv').config({path: './config/.env'})

app.use(cors());

connectDB()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', categoryRoute)

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
})