function isLoggedIn(req, res, next) {
    if(req.session.isLoggedIn) {
        next()
    } else {
        res.redirect('/auth/login')
    }
}

module.exports = isLoggedIn