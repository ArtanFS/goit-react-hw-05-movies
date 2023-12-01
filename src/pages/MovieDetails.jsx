import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMoviesById } from 'services/API';
import { BackLink } from '../components/BackLink';
import { MovieInfo } from '../components/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   const movie = getMoviesById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // console.log(location.state.from);
  const [movie, setMovie] = useState({});
  // const BASE = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  useEffect(() => {
    const handleImages = async () => {
      try {
        // setIsLoading(true);
        // setLoadMore(false);
        const data = await getMoviesById(movieId);
        setMovie(data);
        // setLoadMore(page < Math.ceil(data.totalHits / 12));
        // setError('');
        // console.log(data);
      } catch (error) {
        console.log('error:-->', error.message);

        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    handleImages();
  }, [movieId]);
  // const URLa = BASE + movie.poster_path;
  // console.log(URLa);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieInfo movie={movie} />
    </main>
  );
};

export default MovieDetails;
