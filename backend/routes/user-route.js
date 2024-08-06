// importarea
import express from 'express';
import { deleteUser, getAllUsers, login, signUp, updateUser } from '../controllers/user-controller';

//router
const userRoute = express.Router();

//user routes
userRoute.get('/',getAllUsers);
userRoute.post('/signup',signUp);
userRoute.put('/:id',updateUser);
userRoute.delete('/:id',deleteUser);
userRoute.post('/login',login);

//export area
export default userRoute;
