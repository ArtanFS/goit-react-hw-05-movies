import { useEffect, useState } from 'react';
import { getMovies } from 'services/API';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';
import Error from '../components/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies([...data]);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    movies.length === 0 && fetchMovies();
  }, [movies.length]);

  return (
    <main>
      {isLoading && <Loader />}
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {error && <Error err={error} />}
    </main>
  );
};

export default Home;
