const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') //this package has functions to create json we token
const SECRET = process.env.SECRET_KEY

module.exports={
    registerUser:async(req,res)=>{
        try{
            ///creating a new user
            const newUser = await User.create(req.body )
            console.log(newUser)
            // const data = process.env.SECRET_KEY // to use info from the .env file you have to create a variable that will have process.env.name of the info you wany to use
            //creating a token below. first argument passes id and email, second argument passes secret from .env
            const userToken = jwt.sign({_id:newUser._id,email:newUser.email}, SECRET)
            //sending token back to the user as a cookie
            res.status(201).cookie('userToken',userToken,{httpOnly:true, expires:new Date(Date.now()+90000)}).json({successMessage:"User logged in", user:newUser}) //90 minutes expiration date
        }catch(error){
            res.status(400).json(error)
            console.log(error)
            /// install  npm i dotenv jsonwebtoken
//// npm i cookie-parser ( will allow us to send cookies)
        }
    },
    loginUser: async(req,res)=>{
        const user = await User.findOne({email:req.body.email}) //find the user that matches this email
        if(!user){ //if user isnt found then =>
            res.status(400).json({error:'invalid email/password'})
        }
        try{
            const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
            console.log(isPasswordValid)
            if(!isPasswordValid){
                res.status(400).json({error:'invalid email/password'})
            }else{
                const userToken = jwt.sign({_id:user._id,email:user.email}, SECRET)
                res.status(201).cookie('userToken',userToken,{httpOnly:true, expires:new Date(Date.now()+90000)}).json({successMessage:"User logged in", user:user}) //90 minutes expiration date
            }
        }catch(error){
            res.status(400).json({error:'invalid email/password'})
        }
    },
    logoutUser:(req,res)=>{
        res.clearCookie('userToken')
        res.json({success:'User Loggeg Ou'})
    }
}
