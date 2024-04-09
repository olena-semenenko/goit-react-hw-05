import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetchTrendingMovies();

      setMovies(data);
    })();
  }, []);

  return (
    <>
      <Navigation />
      <div>{movies && <MovieList movies={movies.results} />}</div>
    </>
  );
};

export default HomePage;
