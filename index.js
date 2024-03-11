const app  = require('./app')
const port = require('./config/port.config')
const mongoose = require('mongoose')
const db_config = require('./config/db.config')
const usermodel = require('./model/user.model')
const todomodel = require('./model/todo.model')

mongoose.connect(db_config.db_url)
const db = mongoose.connection

db.on('err',()=>{
    console.log('error while connecting database')
})
db.once('open',()=>{
    console.log("database connected successfully")
    init()
})
async function init(){

}
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(port.port,(req,res)=>{
    console.log(`listening to port ${port.port}`)
})