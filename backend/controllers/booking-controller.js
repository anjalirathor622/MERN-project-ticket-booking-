//import area
import Booking from "../models/Booking";

//New Booking
const newBooking = async (req, res, next) => {

    const {movie,date,seatNumber,user} = req.body;
    let booking;
    try{
        booking = new Booking({
            movie,
            date:new Date(`${date}`),
            seatNumber,
            user
        });
    }catch(err){
        console.log(err);
    };

    if(!booking){
        return res.status(500).json({message:"unexpeted error"})
    };

    return res.status(200).json({ booking });
};

//export area 
export {newBooking};