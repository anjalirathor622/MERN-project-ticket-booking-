// import area
import mongoose from 'mongoose';

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
    addedMovies:[
        {
            type: String,
        }
    ]
});

//export area
export default mongoose.model('Admin', adminSchema)