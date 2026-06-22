import { useState } from 'react';

import { IoSearch } from 'react-icons/io5';

import {
  SearchWrapper,
  SearchInput,
  SearchButton,
} from './SearchBar.styled.js';

export const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);
    setCity('');
  };

  return (
    <SearchWrapper as="form" onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search location..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <SearchButton type="submit">
        <IoSearch />
      </SearchButton>
    </SearchWrapper>
  );
};