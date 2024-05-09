// IMPORTS
import { displayWeatherInfo } from "./displayWeather.js";

const getWeatherData = async (data) => {

   console.log(data);
   const {
            name: local, 
            main: {temp, temp_min, temp_max, humidity}, 
            sys: {country},
            wind: { speed },
         } = await data;

   displayWeatherInfo(
      local, 
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