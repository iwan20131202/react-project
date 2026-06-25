import {
  Card,
  Header,
  City,
  Country,
  Time,
  ForecastButtons,
  ForecastButton,
  DateRow,
  WeatherIcon,
  Temperature,
  Footer,
  ActionButton,
  FavoriteButton,
  DeleteButton,
  MoreButton,
} from './WeatherCard.styled.js';

import { IoIosRefresh } from 'react-icons/io';
import { GrFavorite } from 'react-icons/gr';
import { FaRegTrashAlt } from 'react-icons/fa';

export const WeatherCard = ({
  weather,
  onDelete,
  onRefresh,
  onFavorite,
  onMore,
}) => {
  const { name, sys, main, weather: weatherInfo } = weather;

  const countryName = new Intl.DisplayNames(['en'], {
    type: 'region',
  }).of(sys.country);

  const date = new Date();

  return (
    <Card>
      <Header>
        <City>{name}</City>
        <Country>{countryName}</Country>
      </Header>

      <Time>
        {date.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Time>

      <ForecastButtons>
        <ForecastButton>Hourly forecast</ForecastButton>
        <ForecastButton>Weekly forecast</ForecastButton>
      </ForecastButtons>

      <DateRow>
        <span>{date.toLocaleDateString('en-GB')}</span>

        <span>|</span>

        <span>
          {date.toLocaleDateString('en-US', {
            weekday: 'long',
          })}
        </span>
      </DateRow>

      <WeatherIcon
        src={`https://openweathermap.org/img/wn/${weatherInfo[0].icon}@4x.png`}
        alt={weatherInfo[0].description}
      />

      <Temperature>{Math.round(main.temp)}°C</Temperature>

      <Footer>
        <ActionButton onClick={() => onRefresh(weather.id)}>
          <IoIosRefresh />
        </ActionButton>

        <FavoriteButton
          onClick={() => onFavorite(weather.id)}
          $active={weather.favorite}
        >
          <GrFavorite />
        </FavoriteButton>

        <MoreButton onClick={() => onMore(weather)}>See more</MoreButton>

        <DeleteButton onClick={() => onDelete(weather.id)}>
          <FaRegTrashAlt />
        </DeleteButton>
      </Footer>
    </Card>
  );
};