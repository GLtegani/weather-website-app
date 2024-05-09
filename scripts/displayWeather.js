// IMPORTS
import { UserInput } from "./main.js";
import { kelvinToCelsius, metersPersecondToKilometersPerHour } from "./utils.js";
   
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
   let mainTemp = kelvinToCelsius(temp);
   let maxTemp = kelvinToCelsius(tempMax);
   let minTemp = kelvinToCelsius(tempMin);
   UserInput.inputWeather.value = '';

   UserInput.localWeather.textContent = `${localName}, ${country}`;
   UserInput.mainTemperature.textContent = `${mainTemp}`;
   UserInput.maxTemperature.textContent = `${maxTemp}°`;
   UserInput.minTemperature.textContent = `${minTemp}°`;
   UserInput.humidity.textContent = `${humidity}%`;
   UserInput.windSpeed.textContent = `${windVelocity}km/h`;
};

// EXPORTS
export { displayWeatherInfo };