function storeSessionData(req, data) {
    req.session.isLoggedIn = true 
    req.session.userId = data.id
    req.session.first_name = data.first_name
}

function deleteSessionData(req) {
    delete req.session.isLoggedIn
    delete req.session.userId
    delete req.session.first_name
}

module.exports = { storeSessionData, deleteSessionData}