const mongoose = require('mongoose')

const todoschema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        minlength:10,
        // unique:true
    },
    // title:{
    //     type:String,
    //     // required:true,
    //     // hidden:false,
    // },
    description:{
        type:Array,
        required:true,
        hidden:false,
    }
},{timestamps:true,versionKey:false});

module.exports = mongoose.model("Todo",todoschema);