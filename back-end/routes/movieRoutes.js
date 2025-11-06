import { Router } from 'express';
import movieController from '../controllers/movieController.js';

const movieRoutes = Router();

movieRoutes.get("/movies", movieController.getAllMovies);


export default movieRoutes;