//impor area 
import express from "express";
import { newBooking } from "../controllers/booking-controller";

const bookingRouter = express.Router();
//routes
bookingRouter.post("/",newBooking);

//export area

export default bookingRouter;
