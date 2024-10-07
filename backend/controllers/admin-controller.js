// import arrea
import Admin from "../models/Admin"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
//  Admin Signup
const addAdmin = async (req, res, next) => {
	const { name, email, password } = req.body
	//finding if admin already exists
	let existAdmin
	try {
		existAdmin = await Admin.findOne({ email })
	} catch (err) {
		console.log("error", err)
	}

	if (existAdmin) {
		return res.status(400).json({ message: "admin already exists" })
	}

	//if doesnt exist then Create Admin
	//validate
	if (
		!email &&
		email.trim() === "" &&
		!password &&
		password.trim() === ""
	) {
		return res.status(422).json({ message: "invalid input" })
	}

	let admin
	//hashing password
	const hashedPassword = bcrypt.hashSync(password)
	//error handling
	try {
		//creating new admin
		admin = new Admin({
			email,
			password: hashedPassword,
		})
		admin = await admin.save()
	} catch (e) {
		console.log("error:", e)
	}

	if (!admin) {
		return res.status(500).json({ message: "unexpexted error" })
	}

	return res.status(200).json({ admin })
}

// Admin Login
const loginAdmin = async (req, res, next) => {
	//destructure
	const {email, password } = req.body
	//validation
	if (
		!email &&
		email.trim() === "" &&
		!password &&
		password.trim() === ""
	) {
		return res.status(422).json({ message: "invalid input" })
	}
	// To Login (find admin in db)
	let loggedAdmin
	try {
		loggedAdmin = await Admin.findOne({ email })
	} catch (e) {
		console.log("Error: " + e)
	}

	if (!loggedAdmin) {
		return res.status(500).json({ message: "admin not found" })
	}

	//compare passwords if admin found
	const comparePassword = bcrypt.compareSync(password, loggedAdmin.password)
	if (!comparePassword) {
		return res.status(500).json({ message: "Incorrect password" })
	}

	//if compare is  successfull then
	//give Token to admin for edit movies
	const token = jwt.sign(
		{ id: loggedAdmin._id, name: loggedAdmin.name },
		process.env.SECRET_KEY,
		{ expiresIn: "7d" }
	)

	//login successful, token provided
	return res.status(200).json({
		message: "Authentication successfull",
		token,
		id: loggedAdmin._id,
	})
}

//get all admins
const allAdmins = async (req, res, next) => {
	let adminList
	try {
		adminList = await Admin.find()
	} catch (err) {
		console.log(err)
	}

	if (!adminList) {
		return res.status(404).json({ message: "Not Found" })
	}

	return res.status(200).json({ adminList })
}

//Delete Admin
const adminDelete = async (req, res, next) => {
	const id = req.params.id;

	let deleteAdmin;
	try {
		deleteAdmin = await Admin.findByIdAndDelete(id);
	}catch(err) {
		console.log (err);
	};

	if (!deleteAdmin) {
		return res.status(404).json({message: 'Admin not found'});
	}
	return res.status(200).json({message:"Admin Removed Successfully"})
}
//Export arrea
export { addAdmin, loginAdmin, allAdmins, adminDelete}
