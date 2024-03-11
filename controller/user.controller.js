const userservice = require('../services/user.services')
const bcrypt = require('bcryptjs')
const usermodel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const secret = require('../config/passwordsecret.config')

exports.register = async (req,res,next)=>{
    try{
        const user_obj = {
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,8)
        }
        const successreg = await userservice.registeruser(user_obj.email,user_obj.password)
        res.send({status:200,message:"user registered successfully"})
        // next()
    }
    catch(err){
        console.log("error while register ",err)
        res.status(500).send({msg:"error happened while register user"})
    }
    // next()
}

exports.login = async (req,res,next)=>{
    try{
        const user_obj = {
            email:req.body.email,
            password:req.body.password
        }
        const user = await userservice.checkuser(req.body.email);
        if(!user){
            return res.send({message:"User is not exist",status:500});
        }
        const ispassword = bcrypt.compareSync(req.body.password,user.password)
        // const ismatch = user.comparepassword(req.body.password)
        if(!ispassword){
            res.send({message:"Password is invalid",status:500});
            console.log("Password is wrong")
        }
        let tokendata = {_id:user._id,email:user.email}
        const token = await userservice.gentoken(tokendata,secret.secret)
        res.send({
            token:token,
            status:200,
        })
    }
    catch(err){
        console.log("error while register ",err)
        res.status(500).send({msg:"error happened while register user"})
    }
    // next()
}