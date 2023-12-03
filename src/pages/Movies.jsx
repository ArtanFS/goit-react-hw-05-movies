import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../services/API';
import MoviesList from '../components/MoviesList';
import Searchbar from '../components/Searchbar';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Noitems from '../components/Noitems';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('query') ?? '';
  const isMovies = Boolean(movies.length);

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesByQuery(movieTitle);
        setMovies(() => [...data]);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieTitle && fetchMovies();
  }, [movieTitle]);

  return (
    <main>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {isMovies && <MoviesList movies={movies} />}
      {!isMovies && movieTitle && !isLoading && !error && (
        <Noitems item="movies" query="query" />
      )}
      {error && <Error err={error} />}
    </main>
  );
};

export default Movies;
