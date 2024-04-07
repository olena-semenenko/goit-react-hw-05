import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';
import { useRef } from 'react';
const MovieCard = ({ movie }) => {
  function normalizeDate(dateString) {
    const dateParts = dateString.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const normalizedDate = `${day}.${month}.${year}`;

    return normalizedDate;
  }

  return (
    <div className={css.movie_card}>
      <h1 className={css.title}>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={css.poster}
      />
      <p className={css.description}>
        Decription:<span>{movie.overview}</span>
      </p>
      <p className={css.releaseDate}>
        Realease date:<span>{normalizeDate(movie.release_date)}</span>
      </p>
      <p className={css.voteAverage}>
        Vote average:<span>{movie.vote_average}</span>
      </p>

      <p className={css.popularity}>
        Popularity:<span>{movie.popularity}</span>
      </p>
      <p className={css.status}>
        Status:<span>{movie.status}</span>
      </p>
      <p className={css.genres}>
        Genres:<span>{movie.genres.map(genre => genre.name).join(', ')}</span>
      </p>
    </div>
  );
};

export default MovieCard;
