// import area
import mongoose, { Mongoose } from 'mongoose';

//defining schemas
const adminSchema = new mongoose.Schema({
    email:{
        type : String,
        unique : true
    },
    password:{
        type: String,
        required: true,
        minLenght: 8
    },
    addedMovies:[{
            type: mongoose.Types.ObjectId,
            ref:"Movies"
        }]
});

//export area
export default mongoose.model('Admin', adminSchema)