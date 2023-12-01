import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarWrap,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <SearchbarWrap>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={search}
          onChange={handleChange}
        />
        <SearchFormButton type="submit">
          <FiSearch size="18" />
        </SearchFormButton>
      </SearchForm>
    </SearchbarWrap>
  );
};

export default Searchbar;
