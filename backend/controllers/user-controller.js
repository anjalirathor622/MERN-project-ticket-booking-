// import area
import Booking from "../models/Booking";
import User from "../models/User";
import bcrypt from "bcryptjs";

//Get all Users
const getAllUsers = async (req, res, next) => {
  let users;
  //error handling
  try {
    users = await User.find();
  } catch (err) {
    return console.log("error", err);
  };

  if (!users) {
    return res.status(500).json({ massage: "unexpected error" });
  };

  return res.status(200).json({ users });
};


//Signup new Users
const signUp = async (req, res, next) => {
  //destructuring
  const { name, email, password, bookings } = req.body;

  //finding if user already exists
	let existUser;
	try {
		existUser = await User.findOne({ email })
	} catch (err) {
		console.log("error", err)
	}

	if (existUser) {
		return res.status(400).json({ message: "user already exists" })
	}
  //validating
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "inavalid input" });
  };

  let user;
  //password encrinpting/hashing
  const hashedPassword = bcrypt.hashSync(password);
  //error handling
  try {
    user = new User({
      name,
      email,
      password: hashedPassword,
      bookings
    });
    user = await user.save();
  } catch (err) {
    return console.log("error", err);
  };

  if (!user) {
    return res.status(500).json({ massage: "unexpected error" });
  };

  return res.status(201).json({ user });
};


//Update User
const updateUser = async (req, res, next) => {
  const id = req.params.id;           //destructuring
  const { name, email, password } = req.body;
  // validation
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "inavalid input" });
  };

  let user;
  // hashing password
  const hashedPassword = bcrypt.hashSync(password);
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password: hashedPassword,
    });
  } catch (e) {
    return console.log("Error", e);
  };

  if(!user){
    return res.status(500).json({ massage: "unexpected error" });
  };

  return res.status(200).json({massage:"successfully updated" });
};

//Delete User
const deleteUser = async (req,res,next) => {
    const id = req.params.id;

    let user;
    //error handling
    try{
        user = await User.findByIdAndDelete(id);  //deleting user

    }catch(err){
        console.log(err);
    };

    if(!user){
        return res.status(500).json({ massage: "unexpected error" });
      };

    return res.status(200).json({massage:"User deleted" });
};

//Login User
const login = async (req,res,next) => {
    const {email,password,id} = req.body;
    // validation
    if(
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
    ){
        return res.status(422).json({message:'invalid user'});
    };

    let loginUser;
    try{
        loginUser = await User.findOne({ email });

    }catch(e){
        console.log(e);
    };

    if(!loginUser){
        return res.status(500).json({ massage: "user not exist" });
    };
    //comparing given password to hashed password
    const comparePassword = bcrypt.compareSync(password, loginUser.password);
    if(!comparePassword){
        return res.status(500).json({ massage:"Password Incorrect"});
    };

    return res.status(200).json({ massage:"Login Successfull",id:loginUser._id})
}

//Get Users Bookings
const getUserBookings =async (req, res, next) => {
  const id = req.params.id;

  let myBookings;
  try{
    //finding bookings of user using Booking model reference with user ID
    myBookings = await Booking.find({ user:id });
  }catch(err){
    console.log(err);
  }

  if (!myBookings){
    return res.status(404).json({message:"Booking Not Found"});
  }

  return res.status(200).json({myBookings});
}
//Export area
export { getAllUsers, signUp, updateUser, deleteUser, login, getUserBookings};
