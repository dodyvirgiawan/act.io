const router = require('express').Router()
const gettingStartedRouter = require('./gettingStartedRoute.js')
const homepageRouter = require('./homepageRoute.js')
const authRouter = require('./authRoute.js')

router.use('/', homepageRouter)
router.use('/gettingstarted', gettingStartedRouter)
router.use('/auth', authRouter)

module.exports = router