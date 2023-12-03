import { Wrapper } from './Noitems.styled';

const Noitems = ({ item, query }) => {
  return (
    <Wrapper>
      We don't have any {item} for this {query ? query : 'movie'}
    </Wrapper>
  );
};

export default Noitems;
