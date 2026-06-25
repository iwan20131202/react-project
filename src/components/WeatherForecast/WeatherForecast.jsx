import light_rain from '../../assets/images/Weekly-Forecast/light-rain.png';
import few_clouds from '../../assets/images/Weekly-Forecast/few-clouds.png';
import overcast_clouds from '../../assets/images/Weekly-Forecast/overcast-clouds.png';
import clear_sky from '../../assets/images/Weekly-Forecast/clear-sky.png';
import scattered_clouds from '../../assets/images/Weekly-Forecast/scattered-clouds.png';

import {
  Container,
  Title,
  ForecastRow,
  DateText,
  WeatherInfo,
  WeatherIcon,
  Temp,
  Description,
} from './WeatherForecast.styled';

export const WeeklyForecast = ({ forecast }) => {
  if (!forecast?.list) return null;

  const grouped = {};

  forecast.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];

    if (!grouped[date] || item.dt_txt.includes('12:00:00')) {
      grouped[date] = item;
    }
  });

  const dailyForecast = Object.values(grouped);

  const getIcon = description => {
    const desc = description.toLowerCase();

    if (desc.includes('rain')) {
      return light_rain;
    }

    if (desc.includes('few clouds')) {
      return few_clouds;
    }

    if (desc.includes('scattered clouds')) {
      return scattered_clouds;
    }

    if (desc.includes('clear sky')) {
      return clear_sky;
    }

    return overcast_clouds;
  };

  return (
    <Container>
      <Title>6-day forecast</Title>

      {dailyForecast.map(day => (
        <ForecastRow key={day.dt}>
          <DateText>
            {new Date(day.dt * 1000).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
          </DateText>

          <WeatherInfo>
            <WeatherIcon
              src={getIcon(day.weather[0].description)}
              alt={day.weather[0].description}
            />

            <Temp>
              {Math.round(day.main.temp_max)}°{' / '}
              {Math.round(day.main.temp_min)}°
            </Temp>
          </WeatherInfo>

          <Description>{day.weather[0].description}</Description>
        </ForecastRow>
      ))}
    </Container>
  );
};