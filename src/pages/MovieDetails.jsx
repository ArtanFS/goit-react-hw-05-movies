import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMoviesById } from 'services/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   const movie = getMoviesById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  // console.log(location.state.from);
  const [movie, setMovie] = useState({});
  const BASE = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

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
      <Link to={backLinkHref}>Go back</Link>

      <img
        src={
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' +
          movie.poster_path
        }
        alt=""
      />

      <div>
        {/* <h2>Product - {product.name}</h2> */}
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p> */}
      </div>
    </main>
  );
};

export default MovieDetails;
