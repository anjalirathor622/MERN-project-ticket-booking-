import mongoose from "mongoose"

const Schema = mongoose.Schema
const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minLenght: 8,
	},
	bookings: [
		{
			type: mongoose.Types.ObjectId,
			ref: "Booking",
		},
	],
})

export default mongoose.model("User", userSchema)
