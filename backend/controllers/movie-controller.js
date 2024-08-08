//IMPORT AREA
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import Movies from "../models/Movies"
import Admin from "../models/Admin"

//Add/Create Movies
const addMovies = async (req, res, next) => {
	//extracting token
	const extractedToken = req.headers.authorization
	//split will make token sring deffer from bearer key
	extractedToken.split(" ")[1]

	// console.log (extractedToken, typeof extractedToken)

	//token validation
	if (!extractedToken && extractedToken === "") {
		return res.status(404).json({ message: "token invalid" })
	}

	let adminId
	// let adminName;
	//verify token by jwt
	jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrepted) => {
		// console.log(decrepted)
		if (err) {
			return res
				.status(400)
				.json({ message: `verification failed, invalid Admin` })
		} else {
			adminId = decrepted.id
			// adminName = decrepted.name;
			return
		}
	})

	//Create/Add Movie
	let movie
	//desruct movie schema
	const { title, description, actors, releaseDate, posterURL, featured } =
		req.body
	//validation
	if (
		!title &&
		title.trim() === "" &&
		!description &&
		description.trim() === "" &&
		!posterURL &&
		posterURL.trim() === ""
	) {
		return res.status(500).json({ message: "invalid input" })
	}

	//create movie try/catch(error handling)
	try {
		//creating movie
		movie = new Movies({
			title,
			description,
			actors,
			releaseDate: new Date(`${releaseDate}`),
			posterURL,
			featured,
			adminId: adminId,
			// admin:adminName,
		})

		//creating session for stablish relation between Admin and Movie
		const session = await mongoose.startSession()

		//find the Admin
		const adminUser = await Admin.findById(adminId)

		//start transaction refeering to session
		session.startTransaction()

		//save new created movie to DB
		await movie.save({ session })

		//store new movie to admin data as well
		adminUser.addedMovies.push(movie)
		//save the admin data as well
		await adminUser.save({ session })

		//now all needed things done then
		//commit the transaction
		await session.commitTransaction();
        
	} catch (e) {
		console.log("Errorr:", e)
	}

	if (!movie) {
		return res.status(400).json({ message: "uexpected error" })
	}

	return res.status(201).json({ movie })
}

//Get all Movies
const getAllMovies = async (req, res, next) => {
	let allMovies
	try {
		allMovies = await Movies.find()
	} catch (e) {
		console.log(e)
	}

	if (!allMovies) {
		return res.status(404).json({ message: "not found" })
	}

	return res.status(200).json({ allMovies })
}

//Get One Movie By  ID
const getOneMovie = async (req, res, next) => {
	const id = req.params.id

	let getMovieByID
	try {
		getMovieByID = await Movies.findById(id)
	} catch (err) {
		console.log(err)
	}

	if (!getMovieByID) {
		return res.status(404).json({ message: "Not Found" })
	}

	return res.status(200).json({ getMovieByID })
}

//Delete Movie
const removeMovie = async (req, res, next) => {
	const id = req.params.id

	let deleteMovie
	try {
		deleteMovie = await Movies.findByIdAndDelete(id)
	} catch (e) {
		console.log(e)
	}

	if (!deleteMovie) {
		return res.status(404).json({ message: "Movie not found" })
	}

	return res.status(200).json({ message: "Movie Deleted Successfully" })
}

//export area
export { addMovies, getAllMovies, getOneMovie, removeMovie }
