//import area
import express from 'express';
import { addAdmin, loginAdmin } from '../controllers/admin-controller';
//router
const adminRoute = new express.Router();

//admin routes
adminRoute.post('/signup', addAdmin);
adminRoute.post('/login', loginAdmin);

//export
export default adminRoute;