const { Label } = require('../models')
const getErrorItems = require('../helpers/getErrorItems.js')

class LabelController {
    static showLabel(req, res) {
        Label.findAll({order: [['id', 'ASC']]})
            .then(data => {
                res.render('label', {data, sessionInfo: req.session})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getAddLabel(req, res) {
        let errorValidations = null

        if(req.query.errors) {
            errorValidations = JSON.parse(req.query.errors)
        }

        res.render('addLabel', {sessionInfo: req.session, errorValidations});
    }

    static postAddLabel(req, res) {
        Label.create({name: req.body.name})
            .then(() => {
                res.redirect('/label')
            })
            .catch(err => {
                const errors = getErrorItems(err.errors)
                res.redirect(`/label/add?errors=${JSON.stringify(errors)}`)
            })
    }

    static getEditLabel(req, res) {
        let errorValidations = null

        if(req.query.errors) {
            errorValidations = JSON.parse(req.query.errors)
        }

        Label.findOne({where: {id: req.params.id}})
            .then(data =>{
                res.render('editLabel', {data, errorValidations, sessionInfo: req.session})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static postEditLabel(req, res) {
        const data = {
            name: req.body.name
        }

        Label.update(data, {where: {id: req.params.id}})
            .then(() => {
                res.redirect('/label')
            })
            .catch(err => {
                const errors = getErrorItems(err.errors)
                res.redirect(`/label/edit/${req.params.id}?errors=${JSON.stringify(errors)}`)
            })
    }

    static deleteLabel(req, res) {
        Label.destroy({ where:{id: req.params.id}})
        .then((data) => {
            res.redirect('/label')
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = LabelController