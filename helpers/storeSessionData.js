function storeSessionData(req, data) {
    req.session.isLoggedIn = true // For checking whether user is logged in
    req.session.userId = data.id // For displaying to do list only for the user
    req.session.first_name = data.first_name // For greeting in front end
    req.session.phone_number = data.phone_number // For scheduling SMS
}

function deleteSessionData(req) {
    delete req.session.isLoggedIn
    delete req.session.userId
    delete req.session.first_name
    delete req.session.phone_number
}

module.exports = { storeSessionData, deleteSessionData}