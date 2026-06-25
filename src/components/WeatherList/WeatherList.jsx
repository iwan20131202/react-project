import { useState } from 'react';

import { WeatherCard } from '../WeatherCard/WeatherCard.jsx';
import { WeatherDetails } from '../WeatherDetails/WeatherDetails.jsx';
import { WeatherChart } from '../HourlyChart/HourlyChart.jsx';
import { WeeklyForecast } from '../WeatherForecast/WeatherForecast.jsx'; // Направлено в правильную папку

import { fetchWeatherForecast } from '../../services/weatherApi.js';
import { Oval } from 'react-loader-spinner';
import { List, ListItem, LoaderOverlay } from './WeatherList.styled.js';

export const WeatherList = ({
  weatherCards,
  loading,
  onDelete,
  onRefresh,
  onFavorite,
}) => {
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleMore = async weather => {
    try {
      setSelectedWeather(weather);
      const data = await fetchWeatherForecast(
        weather.coord.lat,
        weather.coord.lon
      );
      setForecast(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading && (
        <LoaderOverlay>
          <Oval
            height={60}
            width={60}
            color="#FFB36C"
            secondaryColor="#E8E8E8"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </LoaderOverlay>
      )}

      <List>
        {weatherCards.map(card => (
          <ListItem key={card.id}>
            <WeatherCard
              weather={card}
              onDelete={onDelete}
              onRefresh={onRefresh}
              onFavorite={onFavorite}
              onMore={handleMore}
            />
          </ListItem>
        ))}
      </List>

      <WeatherDetails weather={selectedWeather} />
      <WeatherChart forecast={forecast} />
      <WeeklyForecast forecast={forecast} />
    </>
  );
};
