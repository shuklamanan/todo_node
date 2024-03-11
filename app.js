const express = require('express')
const body_parser = require('body-parser');
const userroutes = require('./routes/user.routes');
const todoroute = require('./routes/todo.routes')
const app = express()
app.use(body_parser.json())//middleware

app.use('/',userroutes)
app.use('/',todoroute);
module.exports = app