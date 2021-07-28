const router = require('express').Router()
const Controller = require('../controllers/authController.js')
const isLoggedIn = require('../helpers/isLoggedIn.js')

router.get('/register', Controller.getRegister)
router.post('/register', Controller.postRegister)
router.get('/login', Controller.getLogin)
router.post('/login', Controller.postLogin)
router.get('/logout', isLoggedIn, Controller.logoutUser)
router.get('/logout/confirm', isLoggedIn, Controller.confirmLogoutUser)

module.exports = router