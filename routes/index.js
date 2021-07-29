const router = require('express').Router()
const gettingStartedRouter = require('./gettingStartedRoute.js')
const homepageRouter = require('./homepageRoute.js')
const authRouter = require('./authRoute.js')
const labelRouter = require('./labelRoute.js')
const todoRouter = require('./todoRoute.js')

router.use('/', homepageRouter)
router.use('/gettingstarted', gettingStartedRouter)
router.use('/auth', authRouter)
router.use('/label', labelRouter)
router.use('/todos', todoRouter)

module.exports = router