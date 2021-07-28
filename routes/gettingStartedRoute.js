const router = require('express').Router()
const Controller = require('../controllers/gettingStartedController.js')

router.get('/', Controller.showGuide)

module.exports = router