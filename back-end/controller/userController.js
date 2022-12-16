import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from './token/jwt.js';

// @dsc user && auth user
// @route /api/users/login
// @access public
const authUsers=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    
    const user=await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error ('Invalid Email or Password')
    }
})

// @dsc register new user
// @route /api/users
// @access public
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    const userExist=await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User Already Exists')
    }
    const user=await User.create({
        name,
        email,
        password,
    })
    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid User Details')
    }
})

// @dsc get user Profile
// @route /api/users/profile
// @access login user
const getUserProfile=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id)
    if(user){
   res.json({
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
   })
    }else{
        res.status(404)
        throw new Error('User Not Found')
    }
})


export {authUsers,getUserProfile,registerUser}