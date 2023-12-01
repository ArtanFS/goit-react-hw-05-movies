export const MovieInfo = ({ movie }) => {
  return (
    <>
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
    </>
  );
};
