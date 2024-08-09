//import area
import express from 'express';
import { addAdmin, adminDelete, allAdmins, loginAdmin } from '../controllers/admin-controller';
//router
const adminRoute = new express.Router();

//admin routes
adminRoute.post('/signup', addAdmin);
adminRoute.get('/allAdmins', allAdmins);
adminRoute.post('/login', loginAdmin);
adminRoute.delete('/:id', adminDelete);

//export
export default adminRoute;