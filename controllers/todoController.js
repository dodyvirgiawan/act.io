const { Todo } = require('../models')
const getErrorItems = require('../helpers/getErrorItems.js')
const { formatDateToHTMLInput } = require('../helpers/formatDate.js')

class TodoController {
    static showUncompletedTodos(req, res) {
        Todo.findAll({where: {UserId: req.session.userId, is_completed: false}, order: [['deadline', 'ASC']]})
            .then(data => res.render('todos', {sessionInfo: req.session, data}))
            .catch(err => res.send(err))
    }

    static showCompletedTodos(req, res) { 
        Todo.findAll({where: {UserId: req.session.userId, is_completed: true}, order: [['updatedAt', 'ASC']]})
            .then(data => res.render('completedTodos', {sessionInfo: req.session, data}))
    }

    static addTodo(req, res) {
        const {name, description, priority, deadline, reminder_date, reminder_hours} = req.body
        const UserId = req.session.userId

        Todo.create({name, description, priority, deadline, reminder_date, reminder_hours, UserId}) //! Hooks afterCreate cronjob
            .then(() => res.redirect('/todos'))
            .catch(err => {
                const errors = getErrorItems(err.errors)
                res.redirect(`/?errors=${JSON.stringify(errors)}`)
            })
    }

    static completeTodo(req, res) {
        Todo.update({is_completed: true}, {where: {id: req.params.id, UserId: req.session.userId}})
            .then(() => res.redirect('/todos'))
            .catch(err => res.send(err))
    }

    static getEditTodo(req, res) {
        let errorValidations = null

        if(req.query.errors) {
            errorValidations = JSON.parse(req.query.errors)
        }

        Todo.findOne({where: {id: req.params.id, UserId: req.session.userId}})
            .then(data => res.render('formEditTodos', {sessionInfo: req.session, formatDateToHTMLInput, data, errorValidations}))
            .catch(err => res.send(err))
        
    }

    static postEditTodo(req, res) {
        const {name, description, priority, deadline, reminder_date, reminder_hours} = req.body

        Todo.update({name, description, priority, deadline, reminder_date, reminder_hours}, {where: {id: req.params.id, UserId: req.session.userId}})
            .then(() => res.redirect('/todos'))
            .catch(err => {
                const errors = getErrorItems(err.errors)
                res.redirect(`/todos/${req.params.id}/edit?errors=${JSON.stringify(errors)}`)
            })
    }

    static deleteTodo(req, res) {
        Todo.deleteTodo(req.params.id, req.session.userId) //* Defined static method
            .then(() => res.redirect('/todos'))
            .catch(err => res.send(err))
    }

    static deleteCompletedTodo(req, res) {
        Todo.deleteTodo(req.params.id, req.session.userId) //* Defined static method
            .then(() => res.redirect('/todos/completed'))
            .catch(err => res.send(err))
    }

    static getAddLabel(req, res) {

    }

    static postAddLabel(req, res) {
        
    }
}

module.exports = TodoController