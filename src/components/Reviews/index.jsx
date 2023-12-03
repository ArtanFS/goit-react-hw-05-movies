import { useEffect, useState } from 'react';
import { getMoviesReviews } from '../../services/API';
import { useParams } from 'react-router';
import ReviewsItems from '../ReviewsItems';
import Noitems from '../Noitems';
import Loader from '../Loader';
import Error from '../Error';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const isReviews = Boolean(reviews.length);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesReviews(movieId);
        setReviews(data);
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <>
        {isLoading && <Loader />}
        {isReviews && <ReviewsItems reviews={reviews} />}
        {error && <Error err={error} />}
        {!isReviews && !isLoading && !error && <Noitems item="reviews" />}
      </>
    </>
  );
};

export default Reviews;
