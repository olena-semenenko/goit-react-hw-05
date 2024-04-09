import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearch } from '../../service/api';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Navigation from '../../components/Navigation/Navigation';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (!query) return;
    (async () => {
      const data = await fetchMovieBySearch(query);

      setMovies(data);
    })();
  }, [query]);

  const onSubmit = value => {
    setSearchParams({
      query: value.searchValue.toLowerCase().trim(),
    });
  };

  return (
    <div>
      <Navigation />
      <SearchForm onSubmit={onSubmit} />
      <div>{movies && <MovieList movies={movies.results} />}</div>
      <div>
        {movies && movies.results.length === 0 && (
          <p className={css.search_error}>No matches found</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
