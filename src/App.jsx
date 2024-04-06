import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages for
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// components
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

import css from '/src/App.module.css';

const App = () => {
  //   const options = {
  //     headers: {
  //       // Замість api_read_access_token вставте свій токен
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDJlMGViYTI4OTNiMjU4MDhiY2U1MmYxNzEwMmY4YyIsInN1YiI6IjY2MTEyNDFhMTEwOGE4MDE3ZDhjZGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eq6YxsOsLepZGA6n8oVxT80qWcUd0evZ-sM7GoqTsM',
  //     },
  //   };
  //   axios
  //     .get(url, options)
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  return (
    <div>
      APP
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
