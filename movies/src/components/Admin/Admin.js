import React from "react"
import AuthForm from "../Auth/AuthForm"
import { adminAuthRequest } from "../../api-helpers/api-helper"
import { useDispatch } from "react-redux"
import { adminActions } from "../../store"

const Admin = () => {
	const dispatch = useDispatch();
	const onResRecieved = (data)=>{
		console.log(data)
		dispatch(adminActions.login())
		localStorage.setItem("adminId",data.id)
		localStorage.setItem("token",data.token)
	}
	const getData = (data) => {
		console.log("Admin", data)
		adminAuthRequest(data.input)
			.then(onResRecieved)
			.catch((err) => console.log("unexpexted admin error", err))
	}
	return (
		<div>
			<AuthForm onSubmit={getData} isAdmin={true} />
		</div>
	)
}

export default Admin
