//import area
import axios from "axios"

//get all movies api
const getAllMovies = async () => {
	//fetch api by axios
	const res = await axios
		.get("/movie")
		.catch((err) => console.log("fetch err", err))
	if (res.status !== 200) {
		return console.log("movies not found", res)
	}
	const data = await res.data
	return data
}

//user authentication request
const sendUserAuthRequest = async (data, signUp) => {
	const res = await axios
		.post(`/user/${signUp ? "signup" : "login"}`, {
			name: signUp ? data.name : "",
			email: data.email,
			password: data.password
		})
		.catch((err) => console.log(err))
	if (res.status !== 200 && res.status !== 201) {
		return console.log("Error Occurred")
	}
	const resData = await res.data
	return resData
}

//admin auth request
const adminAuthRequest = async (data) => {
	const res = await axios
		.post("/admin/login", {
			email: data.email,
			password: data.password
		})
		.catch((err) => console.log("admin request error", err))
	if (res.status !== 200) {
		return console.log("admin not logged in, Error")
	}
	const resData = await res.data
	return resData
}

//get movie details for booking
const getmoviedetails = async (id) => {
	const res = await axios.get(`/movie/${id}`).catch((err) => console.log(err))
	if (res.status !== 200) {
		return console.log("unexpected error")
	}
	const resData = await res.data
	return resData
}

//movie ticket booking api
const newBooking = async (data) => {
	const res = await axios
		.post("/booking/bookMovie", {
			movie: data.movie,
			seatNumber: data.seatNumber,
			date: data.date,
			user: localStorage.getItem("userId")
		})
		.catch((err) => console.log("Booking error", err))
	if (res.status !== 201) {
		console.log("unexpected error")
	}
	const resData = await res.data
	return resData
}

const getUserBookings = async () => {
	const id = localStorage.getItem("userId")
	// console.log(id)
	const res = await axios
		.get(`/user/myBookings/${id}`)
		.catch((err) => console.log("error", err))
	if (res.status !== 200) {
		return console.log("unexpected error")
	}
	const resData = await res.data
	return resData
}

const deleteBooking = async (id) => {
	const res = await axios
		.delete(`/booking/${id}`)
		.catch((err) => console.log("error", err))
	if(res.status!==200){
		return console.log("unexpected error")
	}
	const resData = await res.data
	return resData
}

//export
export {
	getAllMovies,
	sendUserAuthRequest,
	adminAuthRequest,
	getmoviedetails,
	newBooking,
	getUserBookings,
	deleteBooking
}
