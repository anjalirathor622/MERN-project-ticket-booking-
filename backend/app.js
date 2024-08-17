// import area
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoute from "./routes/user-route"
import adminRoute from "./routes/admin-route"
import movieRouter from "./routes/movie-route"
import bookingRouter from "./routes/booking-route"
import cors from "cors"
dotenv.config()
const app = express()

app.use(cors());
app.use(express.json())

//middilewares
app.use("/user", userRoute)
app.use("/admin", adminRoute)
app.use("/movie", movieRouter)
app.use("/booking", bookingRouter)

//connecting DB
mongoose
	.connect(
		`mongodb+srv://admin:${process.env.MONGO_PASS}@cluster0.pmwbusb.mongodb.net/` //db connection url
	)
	.then(() => app.listen(5000, () => console.log("database connected")))
	.catch((e) => console.log("error:", e))
