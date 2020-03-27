const mongoose = require('mongoose')

const postSchma = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descriotion: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchma)