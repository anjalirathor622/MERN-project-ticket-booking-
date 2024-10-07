//import area
import {
	Box,
	Button,
	Dialog,
	FormLabel,
	IconButton,
	TextField,
	Typography
} from "@mui/material"
import React, { useState } from "react"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"

//variables
const labelStyle = {
	my: 1,
	color: "#000"
}
const buttonStyle = {
	variant: "contained",
	mt: 2,
	bgcolor: "#100a50",
	borderRadius: 5,
	color: "#fff",
	":hover": {
		boxShadow: "3px 4px 6px #060606",
		backgroundColor: "#100a50",
		color: "#fff"
	}
}

//authentication Form
const AuthForm = ({ onSubmit, isAdmin }) => {
	//hooks
	const [input, setInput] = useState({ name: "", email: "", password: "" })
	const [isSignup, setIsSignup] = useState(false)

	//function definition
	const handleChange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log("input",input)
		onSubmit({ input, signUp: isAdmin ? false : isSignup })
	}

	return (
		<Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
			<Box ml={"auto"} padding={1}>
				<IconButton>
					<CloseRoundedIcon />
				</IconButton>
			</Box>
			<Typography variant="h4" m={"auto"} textAlign={"center"}>
				{isSignup ? "Sign Up" : "Login"}
			</Typography>
			<form onSubmit={handleSubmit}>
				<Box
					display={"flex"}
					justifyContent={"center"}
					flexDirection="column"
					width={400}
					m="auto"
					p={5}
					alignContent="center"
				>
					{!isAdmin && isSignup && (
						<>
							<FormLabel sx={labelStyle}>Name:</FormLabel>
							<TextField
								value={input.name}
								onChange={handleChange}
								margin="normal"
								variant="standard"
								type={"text"}
								name="name"
							/>
						</>
					)}

					<FormLabel sx={labelStyle}>Email:</FormLabel>
					<TextField
						value={input.email}
						onChange={handleChange}
						margin="normal"
						variant="standard"
						type={"email"}
						name="email"
					/>

					<FormLabel sx={labelStyle}>Password:</FormLabel>
					<TextField
						value={input.password}
						onChange={handleChange}
						sx={{ mb: 2 }}
						margin="normal"
						variant="standard"
						type={"password"}
						name="password"
					/>
					<Button sx={buttonStyle} type="submit" fullWidth>
						{isSignup ? "Sign Up" : "Login"}
					</Button>
					{!isAdmin && (
						<Button
							onClick={() => {
								setIsSignup(!isSignup)
							}}
							sx={{ mt: 2, borderRadius: 5 }}
							type="button"
							fullWidth
						>
							Go To {isSignup ? "Login" : "Sign Up"}
						</Button>
					)}
				</Box>
			</form>
		</Dialog>
	)
}

export default AuthForm
