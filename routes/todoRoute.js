const router = require('express').Router()
const Controller = require('../controllers/todoController.js')
const isLoggedIn = require('../helpers/isLoggedIn.js')

router.get('/', isLoggedIn, Controller.showUncompletedTodos)
router.get('/completed', isLoggedIn, Controller.showCompletedTodos)
router.post('/add', isLoggedIn, Controller.addTodo) 
router.get('/:id/complete', isLoggedIn, Controller.completeTodo)
router.get('/:id/edit', isLoggedIn, Controller.getEditTodo)
router.post('/:id/edit', isLoggedIn, Controller.postEditTodo)
router.get('/:id/delete', isLoggedIn, Controller.deleteTodo)
router.get('/completed/:id/delete', isLoggedIn, Controller.deleteCompletedTodo)
router.get('/:id/addlabel', isLoggedIn, Controller.getAddLabel)
router.post('/:id/addlabel', isLoggedIn, Controller.postAddLabel)
router.get('/:id/deletelabel/:labelId', isLoggedIn, Controller.deleteLabel)

module.exports = router