//import area
import express from 'express';
import { addAdmin, allAdmins, loginAdmin } from '../controllers/admin-controller';
//router
const adminRoute = new express.Router();

//admin routes
adminRoute.post('/signup', addAdmin);
adminRoute.post('/login', loginAdmin);
adminRoute.get('/allAdmins', allAdmins);

//export
export default adminRoute;