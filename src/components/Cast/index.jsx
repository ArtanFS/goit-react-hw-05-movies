import { useEffect, useState } from 'react';
import { getMoviesCast } from '../../services/API';
import { useParams } from 'react-router';
import CastItems from '../CastItems';
import Noitems from '../Noitems';
import Loader from '../Loader';
import Error from '../Error';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const isCast = Boolean(cast.length);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesCast(movieId);
        setCast(data);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isCast && <CastItems cast={cast} />}
      {error && <Error err={error} />}
      {!isCast && !isLoading && !error && <Noitems item="actors" />}
    </>
  );
};

export default Cast;
