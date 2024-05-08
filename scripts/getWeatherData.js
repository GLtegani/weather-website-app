// IMPORTS
import { apiKey } from "./apiData.js";
import { displayWeatherInfo } from "./displayWeather.js";
import { capitalizeWords } from "./utils.js";


const conectAPI = async (local) => {
   local = capitalizeWords(local);

   try {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}`
      const response = await fetch(endpoint);
      if(!response.ok) {
         throw new Error('Unable to connect to endpoint.');
      };
      
      return await getWeatherData(response.json());
   } catch (error) {
      console.error(error);
   };
};

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
export { conectAPI, getWeatherData };