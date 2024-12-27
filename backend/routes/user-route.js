// importarea
import express from 'express';
import { deleteUser, getAllUsers, getUserBookings, getUserById, login, signUp, updateUser } from '../controllers/user-controller';

//router
const userRoute = express.Router();

//user routes
userRoute.get('/',getAllUsers);
userRoute.post('/signup',signUp);
userRoute.put('/:id',updateUser);
userRoute.get('/:id',getUserById);
userRoute.delete('/:id',deleteUser);
userRoute.post('/login',login);
userRoute.get('/myBookings/:id',getUserBookings);

//export area
export default userRoute;
