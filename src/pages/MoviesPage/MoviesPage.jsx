import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import css from './MoviesPage.module.css';
import { NavLink, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { fetchMovieBySearch } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  // const [query, setQuery] = useState('');
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
  const activePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className={activePage}>
            Home
          </NavLink>
          <NavLink to="/movies" className={activePage}>
            Movies
          </NavLink>
        </nav>
      </header>
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
