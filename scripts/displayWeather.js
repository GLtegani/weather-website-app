// IMPORTS
import { UserInput } from "./main.js";
import { hideRainCard, displayRainCard } from "./utils.js";

// FUNCTION
const displayWeatherInfo = (
   localName, 
   temp, 
   tempMin, 
   tempMax, 
   humidity, 
   country, 
   windSpeed,
   rainMM,
) => {
   UserInput.inputWeather.value = '';

   UserInput.localWeather.textContent = `${localName}, ${country}`;
   UserInput.mainTemperature.textContent = `${temp}`;
   UserInput.maxTemperature.textContent = `${tempMax}°`;
   UserInput.minTemperature.textContent = `${tempMin}°`;
   UserInput.humidity.textContent = `${humidity}%`;
   UserInput.windSpeed.textContent = `${windSpeed}km/h`;
   rainMM == undefined ? hideRainCard() : displayRainCard(rainMM);
};

const displayForecastWeather = (
   dayInputs,
   iconInputs,
   maxInputs,
   minInputs,
   days,
   iconDays,
   correctMaxTempDays,
   correctMinTempDays,
) => {
   dayInputs.forEach((element, index) => {
      if(index < days.length) {
         element.textContent = days[index];
      };
   });

   iconInputs.forEach((img, index) => {
      if(index < iconDays.length) {
         img.src = `https://openweathermap.org/img/wn/${iconDays[index]}@2x.png`;
      };
   });

   maxInputs.forEach((element, index) => {
      if(index < correctMaxTempDays.length) {
         element.textContent = `${correctMaxTempDays[index]}°`;
      };
   });

   minInputs.forEach((element, index) => {
      if(index < correctMinTempDays.length) {
         element.textContent = `${correctMinTempDays[index]}°`;
      };
   });
};

// EXPORTS
export { displayWeatherInfo, displayForecastWeather };