require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(router)

app.listen(port, () => console.log(`Act.io running on port ${port}`))