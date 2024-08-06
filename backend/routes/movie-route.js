//import area
import express from "express";
import { addMovies } from "../controllers/movie-controller";

//router
const movieRouter = express.Router();

//routes
movieRouter.post('/',addMovies);

//export area
export default movieRouter;
