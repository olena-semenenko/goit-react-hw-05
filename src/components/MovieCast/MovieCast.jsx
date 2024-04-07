import css from './MovieCast.module.css';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from '../../service/api';
import { useEffect, useState } from 'react';
import defaultImage from '/src/images/default.jpg';

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    (async () => {
      const data = await fetchMovieCastById(movieId);

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
          <li key={item.id}>
            <img src={imageUrl(item.profile_path)} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
