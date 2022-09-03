const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
    english: {
        type: String,
        required: true,
    },     
    french: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Words', wordSchema);