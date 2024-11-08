//import area
import axios from "axios"

//get all movies api
const getAllMovies = async () => {
	//fetch api by axios
	const res = await axios
		.get("/movie")
		.catch((err) => console.log("fetch err", err))

	//validation
	if (res.status !== 200) {
		return console.log("movies not found", res)
	}

	//getting data
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
	return resData;
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

//export
export { getAllMovies, sendUserAuthRequest, adminAuthRequest }
