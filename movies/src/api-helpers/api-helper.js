//import area
import axios from "axios"

//get all movies api
const getAllMovies = async () => {
	//fetch api by axios
	const res = await axios
		.get("http://localhost:5000/movie")
		.catch((err) => console.log("fetch err", err))

	//validation
	if (res.status !== 200) {
		return console.log("movies not found", res)
	}

	//getting data
	const data = await res.data
	return data;
}

//export
export {getAllMovies}; 