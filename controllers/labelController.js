const {Label} = require('../models')

class LabelController {

    static showLabel(req, res) {
        Label.findAll()
        .then(data => {
            res.render('label', {data, sessionInfo: req.session})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getAddLabel(req, res) {
        res.render('addLabel');
    }

    static postAddLabel(req, res) {
        if(!req.body.name) {
            res.send ("please submit correct input")
        } else {  
            const data = {
                name : req.body.name
            }
        Label.create(data)
            .then((data) => {
                res.redirect('/label')
            })
            .catch((err) => {
                res.send(err);
            })
        }
    }

    static getEditLabel(req, res) {
        Label.findOne({where: {id:req.params.id}})
        .then(data =>{
            res.render('editLabel', {data, sessionInfo: req.session})
        })
        .catch((err) => {
            res.send(err);
        })
    }

    static postEditLabel(req, res) {
        const data = {
            name: req.body.name
        }
        Label.update (data, {where: {id: req.params.id}})
        .then(() => {
            res.redirect('/label')
        })
        .catch((err) => {
            res.send(err);
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