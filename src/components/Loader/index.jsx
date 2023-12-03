import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <ThreeDots
        wrapperClass={css.Loader}
        height="40"
        width="80"
        radius="6"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </>
  );
};

export default Loader;
