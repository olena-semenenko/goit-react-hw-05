import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from '../../service/api';
import { useEffect, useState } from 'react';
import defaultImage from '/src/images/default.jpg';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetchMovieDetailsById(movieId, 'credits');

      setCast(data.cast);
    })();
  }, [movieId]);

  const imageUrl = profile_path => {
    if (profile_path) {
      return `https://image.tmdb.org/t/p/w500${profile_path}`;
    } else {
      return defaultImage;
    }
  };

  return (
    <ul className={css.cast_list}>
      {cast &&
        cast.map(item => (
          <li key={item.id} className={css.cast_item}>
            <img src={imageUrl(item.profile_path)} alt={item.name} />
            <div>
              <h3 className={css.cast_title}>{item.name}</h3>
              <p>{item.character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
