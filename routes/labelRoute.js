const router = require('express').Router()
const Controller = require('../controllers/labelController')
const isLoggedIn = require('../helpers/isLoggedIn.js')

router.get('/add', isLoggedIn, Controller.getAddLabel)
router.post('/add', isLoggedIn, Controller.postAddLabel)
router.get('/edit/:id', isLoggedIn, Controller.getEditLabel)
router.post('/edit/:id', isLoggedIn, Controller.postEditLabel)
router.get('/delete/:id', isLoggedIn, Controller.deleteLabel)

module.exports = router