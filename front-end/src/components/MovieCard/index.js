import styles from "./MovieCard.module.css";

const MovieCard = ({ title, genre, year, producer }) => {
  const imagePath = `/images/movies/${title}.png`;

  return (
    <div className={styles.card}>
      <img src={imagePath} alt={title} />
      <h3>{title}</h3>
      <p><strong>Gênero:</strong> {genre}</p>
      <p><strong>Ano:</strong> {year}</p>
      <p><strong>Produtor:</strong> {producer}</p>
    </div>
  );
};

export default MovieCard;
