//import area
import { Box, Button, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import MovieIteam from "./Movies/MovieIteam"
import { Link } from "react-router-dom"
import { getAllMovies } from "../api-helpers/api-helper"

//Home page  component
const HomePage = () => {
	//hooks
	const [movies, setMovies] = useState([])

	useEffect(() => {
		getAllMovies()
			.then((data) => setMovies(data.allMovies))
			.catch((err) => console.log(err))
	}, [])
	console.log("movies...", movies)
	return (
		<Box
			width="100%"
			height="40%"
			m="auto"
			sx={{
				backgroundImage:
					"url('https://media.istockphoto.com/id/1401019613/photo/movie-tickets-online-booking-app.webp?b=1&s=170667a&w=0&k=20&c=CoE9sFDDR8vt56WJ3YJmI44z4ygNif2K68jWl79ZSmE=')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
		>
			<Box width="96%" height="60vh" m="auto" pt={4} mx={4}>
				<img
					src="https://prh.imgix.net/articles/finalheader_booktomovie.png"
					alt="book movie"
					width="100%"
					height="100%"
				/>
			</Box>
			<Box m="auto" p={2}>
				<Typography variant="h4" textAlign={"center"} color={"#fff"}>
					Latest Release
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
				{movies &&
					movies
						.slice(0, 5)
						.map((movie, idx) => (
							<MovieIteam
								key={idx}
								id={movie._id}
								title={movie.title}
								releaseDate={movie.releaseDate}
								posterURL={movie.posterURL}
							/>
						))}
			</Box>
			<Box display="flex" padding={5} margin={"auto"} >
				<Button
					LinkComponent={Link}
					to="/movies"
					variant="contained"
					sx={{
						backgroundColor:"#100a50",
						margin: "auto",
						color: "#fff",
						":hover":{boxShadow: "4px 4px 7px #090909", backgroundColor:"#100a50", color:"#fff"}
					}}
				>
					Show All Movies
				</Button>
			</Box>
		</Box>
	)
}

export default HomePage
