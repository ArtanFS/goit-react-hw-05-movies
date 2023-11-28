import MoviesList from '../components/MoviesList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleImages = async () => {
      try {
        // setIsLoading(true);
        // setLoadMore(false);
        const data = await getMovies();
        setMovies(() => [...data]);
        // setLoadMore(page < Math.ceil(data.totalHits / 12));
        // setError('');
      } catch (error) {
        console.log('error:-->', error.message);

        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    handleImages();
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
