//import area
import React, { useEffect, useState } from "react"
import {
	AppBar,
	Autocomplete,
	Box,
	Tab,
	Tabs,
	TextField,
	Toolbar
} from "@mui/material" //material ui for UI
import MovieIcon from "@mui/icons-material/MovieFilterRounded"
import { getAllMovies } from "../api-helpers/api-helper"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { adminActions, userActions } from "../store"

//header component
const Header = () => {
	//hooks
	const [value, setValue] = useState(0)
	const [movies, setMovies] = useState([])
	const dispatch = useDispatch()
	const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
	const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn)

	useEffect(() => {
		getAllMovies()
			.then((data) => setMovies(data.allMovies))
			.catch((err) => console.log("data", err))
	}, [])

	const logout = (isAdmin) => {
		dispatch(isAdmin ? adminActions.logout() : userActions.logout())
	}

	//ui using matrialui
	return (
		<AppBar sx={{ bgcolor: "#100a50" }} position="sticky">
			<Toolbar>
				<Box>
					<MovieIcon fontSize={"large"} />
				</Box>
				<Box mb={"5px"} ml={"5px"}>
					Book My Show
				</Box>
				<Box
					width={"35%"}
					m={"auto"}
					py={"5px"}
					border={"0"}
					borderRadius={"10px"}
				>
					<Autocomplete
						freeSolo
						options={movies.map((option) => option.title)}
						renderInput={(params) => (
							<TextField
								sx={{ input: { color: "#fff", ml: "10px" } }}
								variant="standard"
								{...params}
								placeholder="Search Movie..."
							/>
						)}
					/>
				</Box>
				<Box display={"flex"}>
					<Tabs
						textColor="inherit"
						variant="scrollable"
						scrollButtons="auto"
						indicatorColor="light"
						value={value}
						onChange={(e, val) => setValue(val)}
					>
						<Tab LinkComponent={Link} to="/" label="Home" />
						<Tab LinkComponent={Link} to="/movies" label="Movies" />
						{!isUserLoggedIn && !isAdminLoggedIn && (
							<>
								<Tab
									LinkComponent={Link}
									to="/auth"
									label="Login/SignUp"
								/>
								<Tab
									LinkComponent={Link}
									to="/admin"
									label="Admin"
								/>
							</>
						)}
						{isUserLoggedIn && (
							<>
								<Tab
									LinkComponent={Link}
									to="/profile"
									label="profile"
								/>
								<Tab
									onClick={() => logout(false)}
									LinkComponent={Link}
									to="/"
									label="logout"
								/>
							</>
						)}
						{isAdminLoggedIn && (
							<>
								<Tab
									LinkComponent={Link}
									to="/add"
									label="add movie"
								/>
								<Tab
									LinkComponent={Link}
									to="/profile"
									label="profile"
								/>
								<Tab
									onClick={() => logout(true)}
									LinkComponent={Link}
									to="/"
									label="logout"
								/>
							</>
						)}
					</Tabs>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
