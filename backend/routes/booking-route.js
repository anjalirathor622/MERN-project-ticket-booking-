//impor area 
import express from "express";
import { allBookings, deleteBooking, getOneBooking, newBooking } from "../controllers/booking-controller";

const bookingRouter = express.Router();
//routes
bookingRouter.post("/bookMovie",newBooking);
bookingRouter.get("/getAllBookings",allBookings);
bookingRouter.get("/:id",getOneBooking);
bookingRouter.delete("/:id",deleteBooking);

//export area

export default bookingRouter;
