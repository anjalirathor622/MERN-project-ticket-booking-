//import area
import React, { useEffect, useState } from "react"
import {
	AppBar,
	Autocomplete,
	Box,
	Tab,
	Tabs,
	TextField,
	Toolbar,
} from "@mui/material" //material ui for UI
import MovieIcon from "@mui/icons-material/MovieFilterRounded"
import {getAllMovies} from "../api-helpers/api-helper"
import { Link } from "react-router-dom"

//header component
const Header = () => {
	//hooks
	const [value, setValue] = useState(0);
	const [movies, setMovies] = useState([]);

	useEffect(()=>{
		getAllMovies()
		.then(data=>setMovies(data.allMovies))
		.catch(err=>console.log('data',err));
	},[])

	//ui using matrialui
	return (
		<AppBar sx={{ bgcolor: "#100a50" }} position="sticky">
			<Toolbar>
				<Box >
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
						<Tab LinkComponent={Link} to='/' label="Home" />
						<Tab LinkComponent={Link} to='/movies' label="Movies" />
						<Tab LinkComponent={Link} to='/auth' label="Login / SignUp" />
						<Tab LinkComponent={Link} to='/admin' label="Admin" />
					</Tabs>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
