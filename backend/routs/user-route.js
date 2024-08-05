import express from 'express';
import { getAllUsers, signUp } from '../controllers/user-controller';

const userRoute = express.Router();

userRoute.get('/',getAllUsers);
userRoute.post('/signup',signUp);

export default userRoute;
