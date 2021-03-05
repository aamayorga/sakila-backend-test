const express = require('express')
const mysql = require('mysql2')
const app = express()
const actorRoutes = require('./routes/actor')
const filmRoutes = require('./routes/film')
const config = require('./config/config.json');
const model = require('./models/index');
const port = 3001
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', actorRoutes)
app.use('/', filmRoutes)

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app
