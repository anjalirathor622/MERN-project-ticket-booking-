import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import Movies from "./components/Movies/Movies"
import Admin from "./components/Admin/Admin"
import Auth from "./components/Auth/Auth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { adminActions, userActions } from "./store"
import Booking from "./components/Booking/Bookings"
import UserProfile from "./profile/Profile"

function App() {
	const dispatch = useDispatch()

	const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
	const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn)
	console.log("admin logged in", isAdminLoggedIn)
	console.log("user logged in", isUserLoggedIn)

	useEffect(() => {
		if (localStorage.getItem("userId")) {
			dispatch(userActions.login())
		} else if (localStorage.getItem("adminId")) {
			dispatch(adminActions.login())
		}
	}, [dispatch])

	return (
		<div>
			<Header />
			<section>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/auth" element={<Auth />} />
					<Route path="/booking/:id" element={<Booking />} />
					<Route path="/user" element={<UserProfile/>} />	
				</Routes>
			</section>
		</div>
	)
}

export default App
