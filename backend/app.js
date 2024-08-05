// import area
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routs/user-route';
dotenv.config();
const app = express();

//middilewares
app.use(express.json());
app.use('/user', userRoute);

mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGO_PASS}@cluster0.pmwbusb.mongodb.net/`
)
.then(()=>
    app.listen(5000, ()=> console.log('database connected')
    )
)
.catch(e=>console.log('error:',e));








