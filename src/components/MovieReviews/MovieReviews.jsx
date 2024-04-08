import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById } from '../../service/api';
import { useEffect, useState } from 'react';
import ReviewsList from '../ReviewsList/ReviewsList';

import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetchMovieDetailsById(movieId, 'reviews');

      setReviews(data);
    })();
  }, [movieId]);

  return (
    <div className={css.reviews_container}>
      {reviews && (
        <h3 className={css.reviews_title}>
          Number of reviews about the film: {reviews.total_results}
        </h3>
      )}
      {reviews && <ReviewsList reviews={reviews.results} />}
    </div>
  );
};

export default MovieReviews;
