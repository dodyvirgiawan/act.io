const { User } = require('../models')
const { comparePassword } = require('../helpers/passwordAuth.js')
const { storeSessionData, deleteSessionData } = require('../helpers/storeSessionData.js')

class AuthController {
    static getRegister(req, res) {
        let errorValidations = null
        let previousInputs = {}

        if(req.query.errors) {
            errorValidations = JSON.parse(req.query.errors)
            previousInputs = JSON.parse(req.query.inputs)
        }

        res.render('register', {sessionInfo: req.session, errorValidations, previousInputs})
    }

    static postRegister(req, res) {
        const {email, first_name, last_name, phone_number, password} = req.body

        User.create({email, first_name, last_name, phone_number, password})
            .then(data => {
                storeSessionData(req, data)
                res.redirect('/')
            })
            .catch(err => {
                const errors = AuthController.getErrorItems(err.errors)
                res.redirect(`/auth/register?errors=${JSON.stringify(errors)}&inputs=${JSON.stringify({email, first_name, last_name, phone_number})}`)
            })
    }

    static getLogin(req, res) {
        let errorValidations = {}
        let previousInputs = null

        if(req.query.errors) {
            errorValidations = JSON.parse(req.query.errors)
            previousInputs = JSON.parse(req.query.inputs)
        }

        res.render('login', {sessionInfo: req.session, errorValidations, previousInputs})
    }

    static postLogin(req, res) {
        const {email, password} = req.body
        
        if(!email || !password) {
            res.redirect(`/auth/login?errors=${JSON.stringify({emptyInput: true})}&inputs=${JSON.stringify(email)}`) 
        } else {
            User.findOne({where: { email }})
                .then(data => {
                    if(data) {
                        if(comparePassword(password, data.password)) {
                            storeSessionData(req, data)
                            res.redirect('/')
                        } else {
                            res.redirect(`/auth/login?errors=${JSON.stringify({wrongCredentials: true})}&inputs=${JSON.stringify(email)}`)
                        }
                    } else {
                        res.redirect(`/auth/login?errors=${JSON.stringify({notFoundInDb: true})}&inputs=${JSON.stringify(email)}`) 
                    }
                })
                .catch(err => res.send(err))
        }
    }

    static logoutUser(req, res) {
        res.render('popUpConfirmLogout', {sessionInfo: req.session})
    }

    static confirmLogoutUser(req, res) {
        deleteSessionData(req)
        res.redirect('/')
    }

    static getErrorItems(errorInstances) { //* Only send key => message, path and validator key to the query
        let errors = []

        errorInstances.forEach(el => {
            errors.push({
                message: el.message,
                path: el.path,
                validatorKey: el.validatorKey
            })
        })

        return errors
    }
}

module.exports = AuthController