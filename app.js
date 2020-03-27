require('dotenv/config')
const express = require('express')
const app = express()
const mongoos = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())


// import routes
const postRoute = require('./routes/posts')
app.use('/posts', postRoute)
// Routes
app.get('/', (req, res) => {
    res.send('we are on home!')
})

// connect to DB
mongoos.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('conntect DB');
});



app.listen(3000)
