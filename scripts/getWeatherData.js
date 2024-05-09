// IMPORTS
import { displayWeatherInfo } from "./displayWeather.js";

const getWeatherData = async (currentWeatherData, forecastWeatherData) => {

   console.log(currentWeatherData, forecastWeatherData);
   const {
      name: city, 
      main: {temp, temp_min, temp_max, humidity}, 
      sys: {country},
      wind: { speed },
   } = await currentWeatherData;

   const { 
      dt: dateTime,
      main: {temp_max: forecastTempMax, temp_min: forecastTempMin},
   } = await forecastWeatherData;

   displayWeatherInfo(
      city, 
      temp, 
      temp_min, 
      temp_max, 
      humidity, 
      country, 
      speed,
   );
};

// EXPORTS
export { getWeatherData };