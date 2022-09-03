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



/*let words = {
    "solutions" : [
      {"id": 1, "word": "ninja"},
      {"id": 2, "word": "spade"},
      {"id": 3, "word": "pools"},
      {"id": 4, "word": "drive"},
      {"id": 5, "word": "relax"},
      {"id": 6, "word": "times"},
      {"id": 7, "word": "train"},
      {"id": 8, "word": "cores"},
      {"id": 9, "word": "pours"},
      {"id": 10, "word": "blame"},
      {"id": 11, "word": "banks"},
      {"id": 12, "word": "phone"},
      {"id": 13, "word": "bling"},
      {"id": 14, "word": "coins"},
      {"id": 15, "word": "hello"}
    ]
} */


app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`);
})