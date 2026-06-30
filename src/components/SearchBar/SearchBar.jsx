import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import {
  SearchWrapper,
  SearchInput,
  SearchButton,
} from './SearchBar.styled.js';


const POPULAR_CITIES = [
  'Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk', 
  'Zaporizhzhia', 'Lviv', 'Kryvyi Rih', 'Mykolaiv', 'Mariupol', 
  'Luhansk', 'Vinnytsia', 'Makiivka', 'Simferopol', 'Sevastopol', 
  'Kherson', 'Poltava', 'Chernihiv', 'Cherkasy', 'Khmelnytskyi', 
  'Chernivtsi', 'Zhytomyr', 'Sumy', 'Rivne', 'Horlivka', 
  'Ivano-Frankivsk', 'Kamianske', 'Kropyvnytskyi', 'Kremenchuk', 'Lutsk', 
  'Ternopil', 'Bila Tserkva', 'Kramatorsk', 'Melitopol', 'Kerch', 
  'Nikopol', 'Sloviansk', 'Uzhhorod', 'Berdiansk', 'Alchevsk', 
  'Pavlohrad', 'Evpatoria', 'Lysychansk', 'Brovary',
  'Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan',
  'Nizhny Novgorod', 'Chelyabinsk', 'Krasnoyarsk', 'Samara', 'Ufa',
  'Rostov-on-Don', 'Omsk', 'Krasnodar',
  'London', 'Paris', 'Berlin', 'Warsaw', 'Rome', 
  'Madrid', 'Vienna', 'Prague', 'Amsterdam', 'Brussels', 
  'Stockholm', 'Oslo', 'Copenhagen', 'Helsinki', 'Lisbon', 
  'Athens', 'Budapest', 'Bucharest', 'Dublin', 'Munich', 
  'Frankfurt', 'Milan', 'Barcelona', 'Zurich', 'Geneva',
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 
  'Austin', 'Jacksonville', 'San Francisco', 'Miami', 'Washington', 
  'Toronto', 'Vancouver', 'Montreal', 'Mexico City', 'Sao Paulo', 
  'Rio de Janeiro', 'Buenos Aires', 'Lima', 'Bogota', 'Santiago',
  'Tokyo', 'Seoul', 'Beijing', 'Shanghai', 'Hong Kong', 
  'Singapore', 'Bangkok', 'Mumbai', 'New Delhi', 'Dubai', 
  'Istanbul', 'Cairo', 'Cape Town', 'Sydney', 'Melbourne'
];

export const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!city.trim()) return;

    onSearch(city);
    setCity('');
  };

  
  const filteredCities = POPULAR_CITIES.filter(item =>
    item.toLowerCase().startsWith(city.toLowerCase())
  );

  return (
    <SearchWrapper as="form" onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search location..."
        value={city}
        onChange={e => setCity(e.target.value)}
        list="cities-list" 
        autoComplete="off" 
      />

      
      <datalist id="cities-list">
        {city.trim() !== '' && filteredCities.map((cityName, index) => (
          <option key={index} value={cityName} />
        ))}
      </datalist>

      <SearchButton type="submit">
        <IoSearch />
      </SearchButton>
    </SearchWrapper>
  );
};