import MoviesList from '../components/MoviesList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(2);
        const data = await getMovies();
        setMovies([...data]);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(1);
      }
    };
    movies.length === 0 && fetchMovies();
  }, [movies.length]);

  return (
    <main>
      {movies.length !== 0 ? <MoviesList movies={movies} /> : isLoading}
      {/* {movies.length === 0 && 'No movies'}
      {error === 0 && 'Error'} */}
    </main>
  );
};

export default Home;
