import { useState, useRef, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import {
  SearchWrapper,
  SearchInput,
  SearchButton,
  DropdownList,
  DropdownItem
} from './SearchBar.styled.js';

const POPULAR_CITIES = ['Kyiv', 'London', 'New York', 'Paris', 'Berlin', 'Tokyo', /* ...інші ваші міста */];

export const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const addToHistory = (cityName) => {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    
    const updatedHistory = [cityName, ...history.filter(item => item !== cityName)].slice(0, 50);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    
    
    window.dispatchEvent(new Event('historyUpdated'));
  };

  const handleSelect = (cityName) => {
    onSearch(cityName);
    addToHistory(cityName);
    setCity('');
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    addToHistory(city);
    setCity('');
    setIsOpen(false);
  };

  const filteredCities = city.trim() !== '' 
    ? POPULAR_CITIES.filter(item => item.toLowerCase().startsWith(city.toLowerCase()))
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <SearchWrapper as="form" onSubmit={handleSubmit} ref={wrapperRef}>
      <SearchInput
        type="text"
        placeholder="Search location..."
        value={city}
        onChange={(e) => { setCity(e.target.value); setIsOpen(true); }}
        onFocus={() => setIsOpen(true)}
        autoComplete="off"
      />
      {isOpen && filteredCities.length > 0 && (
        <DropdownList>
          {filteredCities.map((cityName, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(cityName)}>
              {cityName}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
      <SearchButton type="submit"><IoSearch /></SearchButton>
    </SearchWrapper>
  );
};