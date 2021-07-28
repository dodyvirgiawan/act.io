class GettingStartedController {
    static showGuide(req, res) {
        res.render('gettingStarted', {sessionInfo: req.session})
    }
}

module.exports = GettingStartedController