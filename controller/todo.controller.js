const todoservices = require('../services/todo.services')
const user_model = require('../model/user.model');
const todoModel = require('../model/todo.model');

exports.createtodo = async(req,res,next)=>{
    try{
        let user = await user_model.findOne({email:req.body.email});
        let todouser = await todoModel.findOne({email:req.body.email})
        if(todouser){
            var arr = todouser.description
            console.log(arr)
            arr.push(req.body.description)
            // todouser.description.push(req.body.description)
            todouser.description = arr
            console.log(todouser)
            res.json({status:200,message:"Todo task is added"})
            return await todouser.save();

        }
        else{
            let todo = await todoservices.createtodo(req.body.email,req.body.description)
        }
        // let todo = await todoservices.createtodo(req.body.email,req.body.title,req.body.description)
        res.json({status:200,message:"Todo task is added"})
    }
    catch(err){
        console.log("error while creating todo in controller", err);
        next();
    }
}

exports.readtodo = async(req,res,next)=>{
    try{

        let todo = await todoservices.getdata(req.body.email);
        console.log(todo)
        res.json({td:todo})
    }
    catch(err){
        console.log("error while reading todo in controller", err);
        next();
    }
}

exports.deletetodo = async(req,res,next)=>{
    try{
        const email = req.body.email;
        const item = req.body.item;
        let deleted = await todoservices.delete(item,email);
        res.json({status:200,message:"Item is deleted"})
    }
    catch(err){
        console.log("Error while deleting todo",err)
        next()
    }
}