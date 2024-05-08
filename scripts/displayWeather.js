// IMPORTS
import { apiKey } from "./apiData.js";
import { conectAPI } from "./getWeatherData.js";
import { UserInput } from "./main.js";
import { fahrenheitToCelsius, metersPersecondToKilometersPerHour } from "./utils.js";
   
// FUNCTION
const displayWeatherInfo = (
   localName, 
   temp, 
   tempMin, 
   tempMax, 
   humidity, 
   country, 
   windSpeed,
) => {
   
   let windVelocity = metersPersecondToKilometersPerHour(windSpeed);
   let mainTemp = fahrenheitToCelsius(temp);
   let maxTemp = fahrenheitToCelsius(tempMax);
   let minTemp = fahrenheitToCelsius(tempMin);
   UserInput.inputWeather.value = '';

   UserInput.localWeather.textContent = `${localName}, ${country}`;
   UserInput.mainTemperature.textContent = `${mainTemp}°C`;
   UserInput.maxTemperature.textContent = `${maxTemp}°`;
   UserInput.minTemperature.textContent = `${minTemp}°`;
   UserInput.humidity.textContent = `${humidity}%`;
   UserInput.windSpeed.textContent = `${windVelocity}km/h`;
};

// EXPORTS
export { displayWeatherInfo };