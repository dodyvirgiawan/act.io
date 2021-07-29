const router = require('express').Router()
const gettingStartedRouter = require('./gettingStartedRoute.js')
const homepageRouter = require('./homepageRoute.js')
const authRouter = require('./authRoute.js')
const labelRouter = require('./labelRoute.js')

router.use('/', homepageRouter)
router.use('/gettingstarted', gettingStartedRouter)
router.use('/auth', authRouter)
router.use('/label', labelRouter)

module.exports = router