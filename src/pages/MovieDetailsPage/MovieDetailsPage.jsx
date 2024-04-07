import css from './MovieDetailsPage.module.css';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../../service/api';
import { useEffect, useRef, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    (async () => {
      const data = await fetchMovieById(movieId);

      setMovie(data);
    })();
  }, [movieId]);

  // GoBack
  const location = useLocation();
  const backRef = useRef(location.state);

  return (
    <div>
      <Link className={css.button} to={backRef.current}>
        Go back
      </Link>
      {movie && <MovieCard movie={movie} />}
      <ul className={css.additional_info}>
        <h4>Additional information</h4>
        <li>
          <Link className={css.additional_info_link} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.additional_info_link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetailsPage;
