import React from "react"
import AuthForm from "./AuthForm"
import { sendUserAuthRequest } from "../../api-helpers/api-helper"

const Auth = () => {
	const getData = (data) => {
		console.log("auth", data)
		sendUserAuthRequest(data.input, data.signUp)
			.then((res) => console.log("user data", res))
			.catch((err) => console.log("unexpected error", err))
	}
	return (
		<div>
			<AuthForm onSubmit={getData} isAdmin={false} />
		</div>
	)
}

export default Auth
