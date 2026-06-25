import {
  Container,
  Item,
  Title,
  Value,
  Icon,
  Grid,
} from './WeatherDetails.styled.js';

import feels_like from '../../assets/images/Details/Feels-like.png';
import humidity from '../../assets/images/Details/Humidity.png';
import pressure from '../../assets/images/Details/Pressure.png';
import wind_speed from '../../assets/images/Details/Wind-speed.png';
import visibility_eye from '../../assets/images/Details/Visibility.png';

export const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const { main, wind, visibility } = weather;

  return (
    <Container>
      <Grid>
        <Item>
          <Title>Feels like</Title>
          <Value>{Math.round(main.feels_like)}°C</Value>
          <Icon>
            <img src={feels_like} alt="feels_like" />
          </Icon>
        </Item>

        <Item>
          <Title>Min °C</Title>
          <Value>{Math.round(main.temp_min)}°C</Value>

          <Title>Max °C</Title>
          <Value>{Math.round(main.temp_max)}°C</Value>
        </Item>

        <Item>
          <Title>Humidity</Title>
          <Value>{main.humidity}%</Value>
          <Icon>
            <img src={humidity} alt="humidity" />
          </Icon>
        </Item>

        <Item>
          <Title>Pressure</Title>
          <Value>{main.pressure} Pa</Value>
          <Icon>
            <img src={pressure} alt="pressure" />
          </Icon>
        </Item>

        <Item>
          <Title>Wind speed</Title>
          <Value>{wind.speed} m/s</Value>
          <Icon>
            <img src={wind_speed} alt="wind_speed" />
          </Icon>
        </Item>

        <Item>
          <Title>Visibility</Title>

          <Value>
            {visibility ? `${(visibility / 1000).toFixed(1)} km` : 'No data'}
          </Value>

          <Icon>
            <img src={visibility_eye} alt="visibility" />
          </Icon>
        </Item>
      </Grid>
    </Container>
  );
};