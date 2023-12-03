import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjRjNmI5NWRhNmE1NWI2MmI3YmQyY2NlMDBkZThjNCIsInN1YiI6IjY1NjRmN2Y0ZWRlYjQzMDBlM2Y4ZjA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Se99AElRac5dEFldAVBXHVj2Yn2Yvx3cf4i09wyudJc';

export async function getMovies() {
  const { data } = await axios('trending/movie/day');
  return data.results;
}

export async function getMoviesById(id) {
  const { data } = await axios(`movie/${id}`);
  return data;
}

export async function getMoviesByQuery(query) {
  let params = {
    query,
  };
  const { data } = await axios('search/movie', { params });
  return data.results;
}

export async function getMoviesReviews(id) {
  const { data } = await axios(`movie/${id}/reviews`);
  return data.results;
}
