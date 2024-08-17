import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material"
import React from "react"

const MovieIteam = ({ title, releaseDate, posterURL, id }) => {
	return (
		<Card
			sx={{
                margin:2,
				width: 250,
				height: 330,
				borderRadius: 2,
				":hover": { boxShadow: "10px 10px 20px #454343" },
			}}
		>
			<img width="100%" height={"51%"} src="https://upload.wikimedia.org/wikipedia/en/6/6b/Union_2024_film_poster.jpg" alt="" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{new Date(releaseDate).toDateString()}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="outlined" sx={{margin:"auto", mb:"5px", ":hover":{ boxShadow: "3px 3px 6px #0e66be" }}} size="small">
					Share
				</Button>
			</CardActions>
		</Card>
	)
}

export default MovieIteam
