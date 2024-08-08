//import area
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    movie:{
        type:mongoose.Types.ObjectId,
        ref:"Movies",
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
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }
});

//export area
export default mongoose.model("Booking",bookingSchema)

