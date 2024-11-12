import React, { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getmoviedetails } from "../../api-helpers/api-helper"
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material"

const Booking = () => {
	const id = useParams().id
	const [movie, setMovie] = useState()
    const [inputs,setInputs] = useState({seatNumber:"" , date:""})
	console.log(id)
	useEffect(() => {
		getmoviedetails(id)
			.then((res) => setMovie(res.getMovieByID))
			.catch((err) => console.log(err))
		// console.log(movie)
	}, [id]);
    const handleChange = (e)=>{
        setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))
}
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs)
    }
	return (
		<div>
			{movie && (
				<Fragment>
					<Typography
						padding={3}
						fontFamily={"fantasy"}
						variant="h4"
						textAlign={"center"}
					>
						Book your Tickets for "{movie.title}"
					</Typography>
					<Box display={"flex"} justifyContent={"center"}>
						<Box
							display={"flex"}
							justifyContent={"column"}
							flexDirection={"column"}
							paddingTop={2}
							padding={2}
							width={"40%"}
							marginRight={"auto"}
						>
							<img
								border={3}
								src={movie.posterURL}
								alt={movie.title}
								width={"100%"}
								height={"350px"}
							/>
							<Box width={"100%"} marginTop={1} padding={2}>
								<Typography fontWeight={"bold"} fontSize={25}>
									{movie.title}
								</Typography>
								<Typography mt={1}>
									{movie.description}
								</Typography>
								<Typography fontWeight={"bold"} mt={1}>
									cast :
									{movie.actors.map(
										(actor) => " " + actor + " | "
									)}
								</Typography>
								<Typography
									fontWeight={"bold"}
									mt={1}
									fontSize={15}
								>
									Release Date :{" "}
									{new Date(movie.releaseDate).toDateString()}
								</Typography>
							</Box>
						</Box>
						<Box width={"60%"} padding={5}>
							<form onSubmit={handleSubmit}>
								<Box
									padding={3}
									margin={"auto"}
									display={"flex"}
									flexDirection={"column"}
								>
									<FormLabel>Seat Number</FormLabel>
									<TextField
										name="seatNumber"
										type="number"
										margin="normal"
										variant="standard"
                                        value={inputs.seatNumber}
                                        onChange={handleChange}
									/>
                                    <FormLabel>Booking Date</FormLabel>
									<TextField
										name="date"
										type="date"
										margin="normal"
										variant="standard"
                                        value={inputs.date}
                                        onChange={handleChange}
									/>
                                    <Button type="submit" sx={{mt:5}}>Book Now</Button>
								</Box>
							</form>
						</Box>
					</Box>
				</Fragment>
			)}
		</div>
	)
}

export default Booking
