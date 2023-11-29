import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import Searchbar from '../components/Searchbar';
import { getMoviesByQuery } from '../services/API';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');

  // const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('query') ?? '';

  const onSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    // if (query !== searchData) {
    //   setQuery(searchData);
    // setMovies([]);
    // }
  };

  // console.log(productName);

  useEffect(() => {
    const handleImages = async () => {
      try {
        // setIsLoading(true);
        // setLoadMore(false);
        const data = await getMoviesByQuery(productName);
        setMovies(() => [...data]);
        // setLoadMore(page < Math.ceil(data.totalHits / 12));
        // setError('');
        // console.log('data', data);
      } catch (error) {
        console.log('error:-->', error.message);

        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    handleImages();
  }, [productName]);

  // const visibleProducts = products.filter(product =>
  //   product.name.toLowerCase().includes(productName.toLowerCase())
  // );

  return (
    <main>
      <Searchbar onSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
