import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../Loader';
import {
  ImgWrap,
  InfoItem,
  InfoList,
  InfoWrap,
  Subtitle,
  Title,
  Wrapper,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const date = new Date(movie.release_date).getFullYear();
  const vote = (movie.vote_average * 10).toFixed();
  const genres = movie.genres.map(genre => genre.name).join(' ');
  return (
    <>
      <Wrapper>
        <ImgWrap>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="200"
            height="300"
          />
          <InfoWrap>
            <Title>{`${movie.title} (${date})`}</Title>
            <p>User Score: {vote}%</p>
            <Subtitle>Overview</Subtitle>
            <p>{movie.overview}</p>
            <Subtitle>Genres</Subtitle>
            <p>{genres}</p>
          </InfoWrap>
        </ImgWrap>
      </Wrapper>
      <Wrapper>
        <Subtitle>Additional information</Subtitle>
        <InfoList>
          <InfoItem>
            <Link to="cast">Cast</Link>
          </InfoItem>
          <InfoItem>
            <Link to="reviews">Reviews</Link>
          </InfoItem>
        </InfoList>
      </Wrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
