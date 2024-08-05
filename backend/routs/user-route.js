import express from 'express';
import { deleteUser, getAllUsers, login, signUp, updateUser } from '../controllers/user-controller';

const userRoute = express.Router();

userRoute.get('/',getAllUsers);
userRoute.post('/signup',signUp);
userRoute.put('/:id',updateUser);
userRoute.delete('/:id',deleteUser);
userRoute.post('/login',login);

export default userRoute;
