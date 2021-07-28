function storeSessionData(req, data) {
    req.session.isLoggedIn = true 
    req.session.userId = data.id
    req.session.first_name = data.first_name
}

function deleteSessionData(req) {
    req.session.isLoggedIn = undefined
    req.session.userId = undefined
    req.session.first_name = undefined
}

module.exports = { storeSessionData, deleteSessionData}