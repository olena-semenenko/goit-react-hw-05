import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetchTrendingMovies();

      setMovies(data);
    })();
  }, []);

  const activePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
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
      <div>{movies && <MovieList movies={movies.results} />}</div>
    </>
  );
};

export default HomePage;
