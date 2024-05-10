// IMPORTS
import { displayWeatherInfo, displayForecastWeather } from "./displayWeather.js";
import { 
   kelvinToCelsius, 
   metersPersecondToKilometersPerHour, 
   unixToDateTime, 
   takeListDays,
} from "./utils.js";
import { UserInput } from "./main.js";

const getWeatherData = async (currentWeatherData, forecastWeatherData) => {

   console.log(currentWeatherData);
   const {
      name: city, 
      main: {temp, temp_min, temp_max, humidity}, 
      sys: {country},
      wind: { speed },
   } = await currentWeatherData;

   const windVelocity = metersPersecondToKilometersPerHour(speed);
   const mainTemp = kelvinToCelsius(temp);
   const minTemp = kelvinToCelsius(temp_min) - 9;
   const maxTemp = kelvinToCelsius(temp_max) + 4;

   const { 
      list: listOfDays,
   } = await forecastWeatherData;

   const daysOfWeek = takeListDays(listOfDays);

   const unixTime = [];
   const maxTempDays = [];
   const minTempDays = [];
  
   const iconDays = [];
   const days = [];
   const correctMaxTempDays = [];
   const correctMinTempDays = [];
   
   const dayInputs = [
      UserInput.dayOne,
      UserInput.dayTwo,
      UserInput.dayThree,
      UserInput.dayFour,
   ];

   const iconInputs = [
      UserInput.oneIcon,
      UserInput.twoIcon,
      UserInput.threeIcon,
      UserInput.fourIcon,
   ];

   const maxInputs = [
      UserInput.oneMax,
      UserInput.twoMax,
      UserInput.threeMax,
      UserInput.fourMax,
   ];

   const minInputs = [
      UserInput.oneMin,
      UserInput.twoMin,
      UserInput.threeMin,
      UserInput.fourMin,
   ];

   daysOfWeek.forEach(element => {
      unixTime.push(element.dt);
      maxTempDays.push(element.main.temp_max);
      minTempDays.push(element.main.temp_min);
      iconDays.push(element.weather[0].icon);
   });

   unixTime.forEach((unixElement) => {
      days.push(unixToDateTime(unixElement));
   });

   maxTempDays.forEach(maxTemp => {
      correctMaxTempDays.push(kelvinToCelsius(maxTemp) + 4);
   });

   minTempDays.forEach(minTemp => {
      correctMinTempDays.push(kelvinToCelsius(minTemp) - 9);
   });

   displayWeatherInfo(
      city, 
      mainTemp, 
      minTemp, 
      maxTemp, 
      humidity, 
      country, 
      windVelocity,
   );

   displayForecastWeather(
      dayInputs, 
      iconInputs, 
      maxInputs, 
      minInputs,
      days,
      iconDays,
      correctMaxTempDays,
      correctMinTempDays,
   );
};

// EXPORTS
export { getWeatherData };