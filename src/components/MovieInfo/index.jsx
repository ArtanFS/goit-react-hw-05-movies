import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieInfo = ({ movie }) => {
  console.log('movieInfo :>> ', movie);
  const date = new Date(movie.release_date);
  return (
    <div>
      <img
        src={
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' +
          movie.poster_path
        }
        alt={movie.title}
        width="200"
        height="300"
      />

      <div>
        <h1>{movie.title + ' (' + date.getFullYear() + ')'}</h1>
        <p>User Score: {(movie.vote_average * 10).toFixed()}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {/* <p>{movie.genres.map(genre => genre.name).join(' ')}</p> */}
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
