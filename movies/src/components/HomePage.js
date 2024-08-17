//import area
import { Box, Button, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import MovieIteam from "./Movies/MovieIteam"
import { Link } from "react-router-dom"
import { getAllMovies } from "../api-helpers/api-helper"

//Home page  component
const HomePage = () => {
	//hooks
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getAllMovies()
			.then((data) => setMovies(data.allMovies))
			.catch((err) => console.log(err))
	}, [])
	return (
		<Box width="100%" height="40%" m="auto" mt={2}>
			<Box width="97%" height="60vh" m="auto">
				<img
					src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/the-union-netflix.jpg"
					alt="the union"
					width="100%"
					height="100%"
				/>
			</Box>
			<Box m="auto" p={2}>
				<Typography variant="h4" textAlign={"center"}>
					Latest Releases
				</Typography>
			</Box>
			<Box
				display="flex"
				width="100%"
				justifyContent="center"
				flexWrap="wrap"
				alignItems="center"
				margin="auto"
			>
				{movies.map((item) => (
					<MovieIteam key={item} />
				))}
			</Box>
			<Box display="flex" padding={5} margin={"auto"}>
				<Button
					LinkComponent={Link}
					to="/movies"
					variant="outlined"
					sx={{
						margin: "auto",
						color: "#325a79",
						":hover": { boxShadow: "5px 5px 10px #3346f0" },
					}}
				>
					Show All Movies
				</Button>
			</Box>
		</Box>
	)
}

export default HomePage
