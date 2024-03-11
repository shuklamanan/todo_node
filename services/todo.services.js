const todomodel = require('../model/todo.model');
const userModel = require('../model/user.model');

exports.createtodo = async(email,description)=>{
    const createtod = new todomodel({
        email,description
        // email,title,description
    });
    return await createtod.save();
}

exports.getdata = async(email)=>{
    try{
        const user= await todomodel.findOne({email:email});
        return user;
    }
    catch(Err){
        console.log("error while reading todo of user",err)
    }
}

exports.delete = async(item,email)=>{
    const user = await todomodel.findOne({email:email})
    const arr = user['description'];
    const index = user['description'].indexOf(item);
    console.log(index);
    if(index>-1){
        user['description'].splice(index,1);
    }
    console.log(user['description']);
    return await user.save();
}