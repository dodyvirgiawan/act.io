const getGreetingMessage = require('../helpers/getGreetingMessage.js')

class GettingStartedController {
    static showGuide(req, res) {
        res.render('gettingStarted', {sessionInfo: req.session, getGreetingMessage})
    }
}

module.exports = GettingStartedController