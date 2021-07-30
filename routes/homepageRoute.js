const router = require('express').Router()
const Controller = require('../controllers/homepageController.js')
const isLoggedIn = require('../middleware/isLoggedIn.js')

router.get('/', isLoggedIn, Controller.showHomepage)

module.exports = router