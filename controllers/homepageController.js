class HomepageController {
    static showHomepage(req, res) {
        let errorValidations = null

        if(req.query.errors) {
            errorValidations = JSON.parse(req.query.errors)
        }
        
        res.render('home', {sessionInfo: req.session, errorValidations})
    }
}

module.exports = HomepageController