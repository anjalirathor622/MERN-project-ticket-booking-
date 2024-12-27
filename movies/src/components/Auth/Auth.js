import React from "react"
import AuthForm from "./AuthForm"
import { sendUserAuthRequest } from "../../api-helpers/api-helper"
import { useDispatch } from "react-redux"
import { userActions } from "../../store"
import { Navigate } from "react-router-dom"

const Auth = () => {
	const dispatch = useDispatch();
	const onResRecieved = (data)=>{
		console.log("auth data",data);
		dispatch(userActions.login())
		localStorage.setItem("userId",data.id)
		Navigate("/")
	}
	const getData = (data) => {
		console.log("auth", data)
		sendUserAuthRequest(data.input, data.signUp)
			.then(onResRecieved)
			.catch((err) => console.log("unexpected error", err))
	}
	return (
		<div>
			<AuthForm onSubmit={getData} isAdmin={false} />
		</div>
	)
}

export default Auth
