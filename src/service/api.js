import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDJlMGViYTI4OTNiMjU4MDhiY2U1MmYxNzEwMmY4YyIsInN1YiI6IjY2MTEyNDFhMTEwOGE4MDE3ZDhjZGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eq6YxsOsLepZGA6n8oVxT80qWcUd0evZ-sM7GoqTsM',
    },
  };

  const response = await axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(err => console.error(err));
  return response;
};

export const fetchMovieById = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDJlMGViYTI4OTNiMjU4MDhiY2U1MmYxNzEwMmY4YyIsInN1YiI6IjY2MTEyNDFhMTEwOGE4MDE3ZDhjZGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eq6YxsOsLepZGA6n8oVxT80qWcUd0evZ-sM7GoqTsM',
    },
  };

  const response = await axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(err => console.error(err));
  return response;
};
export const fetchMovieCastById = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDJlMGViYTI4OTNiMjU4MDhiY2U1MmYxNzEwMmY4YyIsInN1YiI6IjY2MTEyNDFhMTEwOGE4MDE3ZDhjZGRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eq6YxsOsLepZGA6n8oVxT80qWcUd0evZ-sM7GoqTsM',
    },
  };

  const response = await axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(err => console.error(err));
  return response;
};
