import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  // let path = '';
  // console.log('location', location.pathname);
  // switch (location.pathname) {
  //   case '/':
  //     path = 'movies/';
  //     break;

  //   default:
  //     path = '';
  //     break;
  // }
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
