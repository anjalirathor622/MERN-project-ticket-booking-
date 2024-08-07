//import
import mongoose from 'mongoose';

//schema
const movieSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    actors:[{
        type:String,
        required:true
    }],
    releaseDate:{
        type:String,
        required:true
    },
    posterURL:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean
    },
    bookings:[{
        type:String
    }],
    adminId:{
        type:String,
        required:true
    }

});

//export
export default mongoose.model('Movies', movieSchema);
