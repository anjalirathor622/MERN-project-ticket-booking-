import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography
} from "@mui/material"
import React from "react"

const MovieIteam = ({ title, releaseDate, posterURL, id }) => {
	return (
		<Card
			sx={{
				margin: 2,
				width: 250,
				height: 360,
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
					variant="contained"
					sx={{
						backgroundColor:"#100a50",
						margin: "auto",
						mb: "2px",
						":hover":{boxShadow: "3px 3px 6px #100f10", border:"1px solid #100a50", backgroundColor:"#fff", color:"#000"}
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
