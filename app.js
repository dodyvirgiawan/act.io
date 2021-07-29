const express = require('express')
const app = express()
const port = 4000
const router = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(session({
    secret: 'Act.io',
    resave: false,
    saveUninitialized: true
}))
app.use(router)

app.listen(port, () => console.log(`Act.io running on port ${port}`))