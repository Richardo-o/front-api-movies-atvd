import axios from "axios";
import { useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import MovieCard from "../MovieCard";

const HomeContent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies");
        setMovies(response.data); // salva os filmes no estado
      } catch (error) {
        console.log("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []); // executa apenas uma vez

  return (
    <div className={styles.homeContent}>
      <div className={styles.listMoviesCard}>
        <div className={styles.title}>
          <h2>Lista de filmes</h2>
        </div>

        <div className={styles.movies}>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie._id}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                producer={movie.producer}
              />
            ))
          ) : (
            <p>Nenhum filme encontrado 😕</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
