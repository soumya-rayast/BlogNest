const bcrypt = require("bcrypt")
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({message:"User Already exists"});
        }
        const hashedPassword  = await bcrypt.hash(password,10);
        const newUser = new User({username, email, password :hashedPassword});
        await newUser.save();
        res.status(201).json({message:"User Created Successfully"})
    } catch (error) {
        res.status(500).json({message:"Something Went wrong",error})
    }
}
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({username});
        if(!user){
            res.status(400).json({message :"Invalid username"});
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"1d",
        });
        res.status(200).json({message:"Logged in successfully",token})

    } catch (error) {
        res.status(500).json({message:"Something Went wrong",error})
    }
}
const checkAuth = async(req,res) =>{
    const id = req.id;
    try {
        const user = await User.findById(id).select("-password");
        if(!user){
            return res.status(404).json({message:"Access Denied"});
        }
        return res.status(200).json({message:"userFetched"})
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"})
    }
} 
module.exports = {signup,login,checkAuth}