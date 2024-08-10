//import area
import React, { useState } from "react"
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

const movies = ["Hello Mr.", "Kalaki", "Home Alone"]
//header component
const Header = () => {
	//hooks
	const [value, setValue] = useState()

	//ui using matrialui
	return (
		<AppBar sx={{ bgcolor: "#2b2d42" }}>
			<Toolbar>
				<Box>
					<MovieIcon fontSize={"large"} />
				</Box>
				<Box mb={"5px"} ml={"5px"}>
					Book My Movie
				</Box>
				<Box
					width={"35%"}
					m={"auto"}
					py={"5px"}
					bgcolor={"#fff"}
					border={"0"}
					borderRadius={"10px"}
				>
					<Autocomplete
						sx={{
							"div.MuiInputBase-root::before": {
								borderBottom: "none",
								"div.MuiInputBase-root::after": {
									borderBottom: "none",
								},
							},
						}}
						freeSolo
						options={movies.map((option) => option)}
						renderInput={(params) => (
							<TextField
								sx={{ input: { color: "#000", ml: "4px" } }}
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
						<Tab label="Home" />
						<Tab label="Movies" />
						<Tab label="SignUP" />
						<Tab label="Admin" />
					</Tabs>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header
