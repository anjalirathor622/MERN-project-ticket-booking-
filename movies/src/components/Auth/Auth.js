import React from "react"
import AuthForm from "./AuthForm"
import { sendUserAuthRequest } from "../../api-helpers/api-helper"
import { useDispatch } from "react-redux"
import { userActions } from "../../store"

const Auth = () => {
	const dispatch = useDispatch();
	const onResRecieved = (data)=>{
		console.log(data);
		dispatch(userActions.login())
		localStorage.setItem("userId",data.id)
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
