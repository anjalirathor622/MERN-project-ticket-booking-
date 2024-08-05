import User from "../models/User";
import bcrypt from "bcryptjs";

//get all users
const getAllUsers = async (req, res, next) => {
  let users;
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

//signup new users
const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
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
  const hashedPassword = bcrypt.hashSync(password);
  try {
    user = new User({
      name,
      email,
      password: hashedPassword,
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

//update user
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
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

//Delete user
const deleteUser = async (req,res,next) => {
    const id = req.params.id;
    let user;
    try{
        user = await User.findByIdAndDelete(id);

    }catch(err){
        console.log(err);
    };

    if(!user){
        return res.status(500).json({ massage: "unexpected error" });
      };

    return res.status(200).json({massage:"User deleted" });
};

//login user
const login = async (req,res,next) => {
    const {email,password} = req.body;
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

    const comparePassword = bcrypt.compareSync(password, loginUser.password);
    if(!comparePassword){
        return res.status(500).json({ massage:"Password Incorrect"});
    };

    return res.status(200).json({ massage:"Login Successfull"})
}

//expotr controllers functions
export { getAllUsers, signUp, updateUser, deleteUser, login};
