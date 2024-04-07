import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
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
