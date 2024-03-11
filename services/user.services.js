const usermodel = require('../model/user.model')
const jwt = require('jsonwebtoken')

exports.registeruser = async (email,password)=>{
    try{
        const createuser = new usermodel({email:email,password:password})
        return await createuser.save()
    }
    catch(err){
        console.log("Error while registering user",err)
    }
}

exports.checkuser = async (email)=>{
    try{
        return await usermodel.findOne({email});
    }
    catch(err){
        console.log("Error while verifying user", err);

    }
}

exports.gentoken  = async (tokendata,secretkey)=>{
    return jwt.sign(tokendata,secretkey);
}