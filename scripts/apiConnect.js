// IMPORTS
import { getWeatherData } from "./getWeatherData.js";
import { displayError, 
  hideError, 
  capitalizeWords, 
  verifyIfStrHasNumber,
} from "./utils.js";
import { apiKey } from "./apiData.js";
import { UserInput } from "./main.js";

const connectAPI = async (city) => {
  try {
    const stringHasNumber = verifyIfStrHasNumber(city);
    
    if(city == '' || stringHasNumber == true) {
      UserInput.inputWeather.value = '';
      throw new Error('Enter a correct location');
    };

    hideError();
    city = capitalizeWords(city);
    
    const currentWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastWeatherEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const responseCurrentWeather = await fetch(currentWeatherEndpoint);
    const responseForecastWeather = await fetch(forecastWeatherEndpoint);
    
    if(!responseCurrentWeather.ok) {
      UserInput.inputWeather.value = '';
      throw new Error('Unable to connect to endpoint.');
    };

    hideError();
    
    return await getWeatherData(
      responseCurrentWeather.json(),
      responseForecastWeather.json(),
    );
  } catch (error) {
    displayError(error);
  };
};

// EXPORTS
export { connectAPI };