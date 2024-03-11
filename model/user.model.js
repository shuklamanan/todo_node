const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userschema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        minlength:10,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true,versionKey:false})


module.exports = mongoose.model("users",userschema)