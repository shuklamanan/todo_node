const routes = require('express').Router();
const todocntrl = require('../controller/todo.controller')

routes.post('/store',todocntrl.createtodo);
routes.post('/todolist',todocntrl.readtodo);
routes.post('/delete',todocntrl.deletetodo);
module.exports = routes