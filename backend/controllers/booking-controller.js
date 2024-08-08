//import area
import mongoose from "mongoose"
import Booking from "../models/Booking"
import Movies from "../models/Movies"
import User from "../models/User"

//New Booking
const newBooking = async (req, res, next) => {
	//destructuring
	const { movie, date, seatNumber, user } = req.body

	//validating Movie and User
	let existingMovie, existingUser
	try {
		existingMovie = await Movies.findById(movie) //getting movie from Moviesmodel
		existingUser = await User.findById(user) //getting user from UserModel
		// console.log ("moviee:-",existingMovie,"user:-",existingUser);
	} catch (err) {
		return console.log("ERROR-1", err)
	}

	//if movies or user not found
	if (!existingMovie) {
		return res.status(404).json({ message: "Movie not found" })
	}
	if (!existingUser) {
		return res.status(404).json({ message: "User doesn't exist" })
	}

	//creating new booking
	let booking
	try {
		booking = new Booking({
			movie,
			date: new Date(`${date}`),
			seatNumber,
			user,
		})

		//start session to stablish relationship between Movies,User and Booking
		const session = await mongoose.startSession()
		// start the transaction because we already have movie and user references
		session.startTransaction()

		//push booking data to Movie and User
		existingMovie.bookings.push(booking)
		existingUser.bookings.push(booking)

		//save the Movie and User with updated data
		await existingMovie.save({ session })
		await existingUser.save({ session })

		//save the booking
		await booking.save({ session })

		//now done with all tasks we can commit
		session.commitTransaction()
	} catch (err) {
		return console.log("Error in booking creation", err)
	}

	if (!booking) {
		return res.status(500).json({ message: "unexpeted error" })
	}

	return res.status(201).json({ booking })
}

//Get all Bookings
const allBookings = async (req,res,next) => {

    let getAllBookings;
    try{
        getAllBookings = await Booking.find();
    }catch(err){
        return console.log("ERROR-1",err)
    };

    if(!getAllBookings){
        return res.status(404).send({message:"Not Found"});
    };

    return res.status(200).json({getAllBookings});
}

//Get Booking by ID
const getOneBooking = async (req,res,next) => {
    const id = req.params.id;

    let booking;
    try{
        booking = await Booking.findById(id);
    }catch(err){
        return console.log("ERROR-1",err)
    };

    if(!booking){
        return res.status(404).send({message:"Not Found"});
    };

    return res.status(200).json({booking});
}
//export area
export { newBooking, allBookings, getOneBooking}
