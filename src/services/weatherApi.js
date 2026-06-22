import axios from "axios";

const API_KEY = "8c4bf2dd874935188281345ff1bccf4d";

export const fetchWeather = async (city) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "ua",
      },
    },
  );

  return data;
};
