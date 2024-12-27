import React, { Fragment, useEffect } from "react"
import { getUserBookings } from "../api-helpers/api-helper"
import { useState } from "react"
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const UserProfile = () => {
	const [bookings, setBookings] = useState()
	useEffect(() => {
		getUserBookings()
			.then((res) => setBookings(res.myBookings))
			.catch((err) => console.log(err, "errorrr"))
	}, [])
	console.log(bookings)
	return (
		<Box width={"100%"} height={"100vh"} display="flex"  sx={{
            backgroundImage:
                "url('https://media.istockphoto.com/id/1401019613/photo/movie-tickets-online-booking-app.webp?b=1&s=170667a&w=0&k=20&c=CoE9sFDDR8vt56WJ3YJmI44z4ygNif2K68jWl79ZSmE=')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
			{bookings && bookings.length > 0 && (
				<Fragment>
					<Box
						flexDirection={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						width={"30%"}
						padding={3}
                        ml={3}
					>
						<AccountCircleRoundedIcon
							sx={{
								fontSize: "10rem",
								textAlign: "center",
								ml:6,
                                boxShadow: "4px 4px 7px #090909"
							}}
						/>
						<Typography
							padding={1}
                            py={1}
							width={"90%"}
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
							width={"90%"}
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
                                            borderRadius:5,
                                            boxShadow: "4px 4px 7px #090909"
										}}
									>
                                        <ListItemText sx={{m:"2", width:"auto", textAlign:"left"}}>
                                            Movie : {booking.movie.title}
                                        </ListItemText>
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
