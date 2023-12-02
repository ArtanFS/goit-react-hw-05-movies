import MoviesList from '../components/MoviesList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  console.log('movies :>> ', movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(() => [...data]);
        setError('');
      } catch (error) {
        setError(error.message);
      }
    };
    movies.length === 0 && fetchMovies();
  }, [movies.length]);

  return (
    <main>
      {console.log('movies :>> ', movies)}
      {movies && <MoviesList movies={movies} />}
      {movies.length === 0 && 'No movies'}
      {error === 0 && 'Error'}
    </main>
  );
};

export default Home;
