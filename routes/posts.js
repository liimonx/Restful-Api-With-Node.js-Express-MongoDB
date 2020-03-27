const express = require('express')
const route = express.Router()
const Post = require('../models/Post')

route.get('/', (req, res) => {
    res.send('we are on post!')
})

route.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        descriotion: req.body.descriotion
    })

    console.log(post);
    

    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({massages: err})
    })
})

module.exports = route