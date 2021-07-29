class LabelController {

    static getAddLabel(req, res) {
        res.render('addLabel'{sessionInfo: req.session}));
    }

    static postAddLabel(req, res) {
        const data = {
            name : req.body.name
        }
        Label.create(data)
            .then((data) => {
                res.redirect('/label', {sessionInfo: req.session})
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static getEditLabel(req, res) {
        Label.findOne({where: {id:req.params.id}})
        .then(data =>{
            res.render('editLabel', {data}, {sessionInfo: req.session}))
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
            res.redirect('/label', {sessionInfo: req.session}))
        })
        .catch((err) => {
            res.send(err);
        })
    }

    static deleteLabel(req, res) {
        Label.destroy({ where:{id: req.params.id}})
        .then(() => {
            res.redirect('/label', {sessionInfo: req.session})
        })
        .catch((err) => {
            res.send(err);
        })

    }
}

module.exports = LabelController