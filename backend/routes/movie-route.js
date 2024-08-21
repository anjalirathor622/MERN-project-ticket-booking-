//import area
import express from "express";
import { addMovies, getAllMovies, getOneMovie, removeMovie, updateMovie } from "../controllers/movie-controller";

//router
const movieRouter = express.Router();

//routes
movieRouter.get('/',getAllMovies);
movieRouter.get('/:id',getOneMovie);
movieRouter.post('/addMovie',addMovies);
movieRouter.delete('/:id',removeMovie);
movieRouter.put('/:id',updateMovie);

//export area
export default movieRouter;
