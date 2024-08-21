import { Box, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { getAllMovies } from "../../api-helpers/api-helper"
import MovieIteam from "./MovieIteam"

const Movies = () => {
	//hooks
	const [movies, setMovies] = useState([])

	useEffect(() => {
		getAllMovies()
			.then((data) => setMovies(data.allMovies))
			.catch((err) => console.log(err))
	})
	return (
		<Box
			margin={"auto"}
			pt={2}
			bgcolor={"#f16a6a"}
			sx={{
				backgroundImage:
					"url('https://media.istockphoto.com/id/1401019613/photo/movie-tickets-online-booking-app.webp?b=1&s=170667a&w=0&k=20&c=CoE9sFDDR8vt56WJ3YJmI44z4ygNif2K68jWl79ZSmE=')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
		>
			<Typography
				variant="h4"
				margin={"auto"}
				padding={2}
				width={"15%"}
				borderRadius={4}
				color={"#fff"}
				textAlign={"center"}
			>
				All Movies
			</Typography>
			<Box
				width={"100%"}
				display={"flex"}
				margin={"auto"}
				justifyContent="flex-start"
				flexWrap={"wrap"}
			>
				{movies &&
					movies.map((movie, idx) => (
						<MovieIteam
							key={idx}
							title={movie.title}
							posterURL={movie.posterURL}
							releaseDate={movie.releaseDate}
							id={movie._id}
						/>
					))}
			</Box>
		</Box>
	)
}

export default Movies
