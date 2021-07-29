const router = require('express').Router()
const LabelController = require('../controllers/labelController')
const isLoggedIn = require('../helpers/isLoggedIn.js')

router.get('/', isLoggedIn, LabelController.showLabel)
router.get('/add', isLoggedIn, LabelController.getAddLabel)
router.post('/add', isLoggedIn, LabelController.postAddLabel)
router.get('/edit/:id', isLoggedIn, LabelController.getEditLabel)
router.post('/edit/:id', isLoggedIn, LabelController.postEditLabel)
router.get('/delete/:id', isLoggedIn, LabelController.deleteLabel)

module.exports = router