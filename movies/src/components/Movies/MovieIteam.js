import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography
} from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const MovieIteam = ({ title, releaseDate, posterURL, id }) => {
	return (
		<Card
			sx={{
				backgroundColor:"#f2f8e2",
				margin: 2,
				width: 230,
				height: 350,
				borderRadius: 2,
				":hover": { boxShadow: "10px 10px 20px #c6b3b3" }
			}}
		>
			<img width="100%" height={"51%"} src={posterURL} alt={title} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{new Date(releaseDate).toDateString()}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
				LinkComponent={Link} to={`/booking/${id}`}
					variant="contained"
					sx={{
						backgroundColor:"#100a50",
						margin: "auto",
						color: "#fff",
						":hover":{boxShadow: "4px 4px 7px #090909", backgroundColor:"#100a50", color:"#fff"}
					}}
					size="small"
				>
					Book Movie
				</Button>
			</CardActions>
		</Card>
	)
}

export default MovieIteam
