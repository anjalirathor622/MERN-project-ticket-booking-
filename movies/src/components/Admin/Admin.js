import React from "react"
import AuthForm from "../Auth/AuthForm"
import { adminAuthRequest } from "../../api-helpers/api-helper"

const Admin = () => {
	const getData = (data) => {
		console.log("Admin", data)
		adminAuthRequest(data.input)
			.then((res) => console.log("admin logged in", res))
			.catch((err) => console.log("unexpexted admin error", err))
	}
	return (
		<div>
			<AuthForm onSubmit={getData} isAdmin={true} />
		</div>
	)
}

export default Admin
