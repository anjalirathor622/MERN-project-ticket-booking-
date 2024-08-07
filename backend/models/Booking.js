//import area
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    movie:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    seatNumber:{
        type:String,
        required:true
    },
    user:{
        type:String
    }
});

//export area
export default mongoose.model("Booking",bookingSchema)

