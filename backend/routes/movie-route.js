//import area
import express from "express";
import { addMovies, getAllMovies, getOneMovie, removeMovie } from "../controllers/movie-controller";

//router
const movieRouter = express.Router();

//routes
movieRouter.get('/',getAllMovies);
movieRouter.get('/:id',getOneMovie);
movieRouter.post('/addMovie',addMovies);
movieRouter.delete('/:id',removeMovie);

//export area
export default movieRouter;
