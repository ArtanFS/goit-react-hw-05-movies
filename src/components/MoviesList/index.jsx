import { Link, useLocation } from 'react-router-dom';
import { MoviesItem, MoviesItems, MoviesListWrap } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesListWrap>
      <MoviesItems>
        {movies.map(movie => (
          <MoviesItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MoviesItem>
        ))}
      </MoviesItems>
    </MoviesListWrap>
  );
};

export default MoviesList;
