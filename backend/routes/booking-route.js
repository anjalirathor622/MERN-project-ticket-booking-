//impor area 
import express from "express";
import { allBookings, getOneBooking, newBooking } from "../controllers/booking-controller";

const bookingRouter = express.Router();
//routes
bookingRouter.post("/bookMovie",newBooking);
bookingRouter.get("/getAllBookings",allBookings);
bookingRouter.get("/:id",getOneBooking);

//export area

export default bookingRouter;
