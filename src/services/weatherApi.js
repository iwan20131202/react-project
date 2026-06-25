import axios from "axios";

const API_KEY = "7f6b27d93033861940f7ccb7f0bbf020";

export const fetchWeather = async (city) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    },
  );

  return data;
};

export const fetchWeatherForecast = async (lat, lon) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    },
  );

  return data;
};
