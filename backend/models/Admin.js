import mongoose from 'mongoose';

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

export default mongoose.model('admin', adminSchema)