import movieService from "../services/moviesService.js";

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies: movies });
  } catch (error) {
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};


export default {getAllMovies}