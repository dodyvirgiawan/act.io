class HomepageController {
    static showHomepage(req, res) {
        res.render('home', {sessionInfo: req.session})
    }
}

module.exports = HomepageController