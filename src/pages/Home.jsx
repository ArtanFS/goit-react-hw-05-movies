import MoviesList from '../components/MoviesList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fatchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(() => [...data]);
        setError('');
      } catch (error) {
        setError(error.message);
      }
    };
    fatchMovies();
  }, []);
  return (
    <main>
      {movies && <MoviesList movies={movies} />}
      {movies.length === 0 && 'No movies'}
      {error === 0 && 'Error'}
    </main>
  );
};

export default Home;
