import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMoviesById } from 'services/API';
import BackLink from '../components/BackLink';
import MovieInfo from '../components/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   const movie = getMoviesById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // console.log(location.state.from);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(1);

  useEffect(() => {
    const handleImages = async () => {
      try {
        setIsLoading(2);
        // setLoadMore(false);
        const data = await getMoviesById(movieId);
        setMovie(data);
        // setLoadMore(page < Math.ceil(data.totalHits / 12));
        // setError('');
      } catch (error) {
        console.log('error:-->', error.message);

        // setError(error.message);
      } finally {
        setIsLoading(1);
      }
    };
    handleImages();
  }, [movieId]);
  // const URLa = BASE + movie.poster_path;
  // console.log(URLa);

  return (
    <main>
      {console.log(Boolean(movie.title))}
      <BackLink to={backLinkHref}>Go back</BackLink>
      {movie.title ? <MovieInfo movie={movie} /> : isLoading}
    </main>
  );
};

export default MovieDetails;
