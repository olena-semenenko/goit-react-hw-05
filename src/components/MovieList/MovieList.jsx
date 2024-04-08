import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import defaultImage from '/src/images/default.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const imageUrl = poster_path => {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    } else {
      return defaultImage;
    }
  };

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.card}>
          <img src={imageUrl(movie.poster_path)} alt={movie.title} />
          <div>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <Link to={`/movies/${movie.id}`} state={location} className={css.link}>
              Details
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
