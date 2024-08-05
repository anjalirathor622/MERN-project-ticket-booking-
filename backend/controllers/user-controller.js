import User from "../models/User";
import bcrypt from "bcryptjs";

//get all users
export const getAllUsers = async (reqa,res,next) => {
    let users;
    try {
        users = await User.find()
    }
    catch(err) {
        return console.log("error",err);
   }
   if(!users) {
    return res.status(500).json({massage:'unexpected error'});
   }
    return res.status(200).json({ users }) 
}

//signup new users
export const signUp = async (req, res, next) => {
    const {name, email, password} = req.body;
    if(
        !name && 
        name.trim() === ""&&
        !email && 
        email.trim() === "" &&
        !password && 
        password.trim() === ""
    ){
        return res.status(422).json({message:"inavalid input"})
    }

    let user;
    const hashedPassword = bcrypt.hashSync(password)
    try {
        user = new User({name, email, password:hashedPassword});
        user = await user.save();
    }
    catch(err) {
        return console.log("error",err);
    }
    if(!user){
        return res.status(500).json({massage:'unexpected error'});
    }
    return res.status(201).json({ user }) 
}

