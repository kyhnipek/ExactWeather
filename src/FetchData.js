import axios from 'axios';

const WeatherApiKey = 'xxx';
const GEO_API_KEY = 'xxx';
const WeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (lat, lon) => {
  const response = await axios.get(
    WeatherApiUrl +
      '?lat=' +
      lat +
      '&lon=' +
      lon +
      '&units=metric&appid=' +
      WeatherApiKey,
  );
  return response.data;
};
const getCity = async (lat, lng) => {
  const API_URL =
    'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
    lat +
    ',' +
    lng +
    '&key=' +
    GEO_API_KEY;
  const response = await axios.get(API_URL);
  return response.data.results[0].address_components[2].long_name;
};

const getWeatherByCity = async city => {
  const response = await axios.get(
    WeatherApiUrl + '?q=' + city + '&units=metric&appid=' + WeatherApiKey,
  );
  return response.data;
};

export {getWeather, getWeatherByCity, getCity};
