import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMoviesById } from 'services/API';
import BackLink from '../components/BackLink';
import MovieInfo from '../components/MovieInfo';
import Loader from '../components/Loader';
import Error from '../components/Error';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesById(movieId);
        setMovie(data);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && <Loader />}
      {movie.title && <MovieInfo movie={movie} />}
      {error && <Error err={error} />}
    </main>
  );
};

export default MovieDetails;
