import React, { Fragment, useEffect } from "react"
import { deleteBooking, getUserBookings } from "../api-helpers/api-helper"
import { useState } from "react"
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography
} from "@mui/material"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

const UserProfile = () => {
	const [bookings, setBookings] = useState()
	useEffect(() => {
		getUserBookings()
			.then((res) => setBookings(res.myBookings))
			.catch((err) => console.log(err, "errorrr"))
	}, [])
	console.log(bookings)
	const handleDelete = (id) => {
		deleteBooking(id)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
	}
	return (
		<Box
			width={"100%"}
			height={"100vh"}
			display="flex"
			sx={{
				backgroundImage:
					"url('https://media.istockphoto.com/id/1401019613/photo/movie-tickets-online-booking-app.webp?b=1&s=170667a&w=0&k=20&c=CoE9sFDDR8vt56WJ3YJmI44z4ygNif2K68jWl79ZSmE=')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover"
			}}
		>
			{bookings && bookings.length > 0 && (
				<Fragment>
					<Box
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						width={"30%"}
						padding={3}
						m={3}
						border={"1px solid  #000"}
						boxShadow="4px 4px 7px #090909"
						borderRadius={5}
					>
						<AccountCircleRoundedIcon
							sx={{
								fontSize: "10rem",
								width: "100%"
							}}
						/>
						<Typography
							padding={1}
							py={1}
							width={"95%"}
							textAlign={"center"}
							border={"1px solid #000"}
							borderRadius={6}
							fontFamily={"arial"}
							bgcolor="#fff"
							boxShadow="4px 4px 7px #090909"
						>
							Name : {bookings[0].user.name}
						</Typography>
						<Typography
							mt={1}
							py={1}
							padding={1}
							width={"95%"}
							textAlign={"center"}
							border={"1px solid #000"}
							borderRadius={6}
							fontFamily={"arial"}
							bgcolor="#fff"
							boxShadow="4px 4px 7px #090909"
						>
							Email : {bookings[0].user.email}
						</Typography>
					</Box>
					<Box
						width={"70%"}
						display={"flex"}
						flexDirection={"column"}
						border={"1px solid #000"}
						my={3}
						boxShadow="-4px 4px 7px #090909"
						borderRadius={5}
					>
						<Typography
							variant={"h3"}
							textAlign={"center"}
							fontFamily={"vardana"}
							padding={2}
							mt={3}
						>
							Bookings
						</Typography>
						<Box
							mt={3}
							display={"flex"}
							flexDirection={"column"}
							width={"90%"}
						>
							<List>
								{bookings.map((booking, index) => (
									<ListItem
										sx={{
											bgcolor: "#3F48B8",
											m: 1,
											textAlign: "center",
											color: "#fff",
											borderRadius: 5,
											boxShadow: "4px 4px 7px #090909"
										}}
									>
										<ListItemText
											sx={{
												m: "2",
												width: "auto",
												textAlign: "left"
											}}
										>
											<FiberManualRecordIcon
												sx={{ fontSize: "small" }}
											/>
											Movie : {booking.movie.title}
										</ListItemText>
										<ListItemText
											sx={{
												m: "2",
												width: "auto",
												textAlign: "left"
											}}
										>
											<FiberManualRecordIcon
												sx={{ fontSize: "small" }}
											/>
											Seat : {booking.seatNumber}
										</ListItemText>
										<ListItemText
											sx={{
												m: "2",
												width: "auto",
												textAlign: "left"
											}}
										>
											<FiberManualRecordIcon
												sx={{ fontSize: "small" }}
											/>
											Date :{" "}
											{new Date(
												booking.date
											).toDateString()}
										</ListItemText>
										<IconButton
											onClick={()=>handleDelete(booking._id)}
											color="#000"
										>
											<DeleteForeverIcon />
										</IconButton>
									</ListItem>
								))}
							</List>
						</Box>
					</Box>
				</Fragment>
			)}
		</Box>
	)
}

export default UserProfile
