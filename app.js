const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => res.send('Hello world from Act.io'))

app.listen(port, () => console.log(`Act.io running on http://localhost:${port}`))