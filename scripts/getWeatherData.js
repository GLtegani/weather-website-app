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
      rain: rainVolume,
   } = await currentWeatherData;

   const { 
      list: listOfDays,
   } = await forecastWeatherData;

   manipulateData(
      city,
      temp,
      temp_min,
      temp_max,
      humidity,
      country,
      speed,
      listOfDays,
      rainVolume,
   );   
};

const manipulateData = (
   city,
   temp,
   temp_min,
   temp_max,
   humidity,
   country,
   speed,
   listOfDays,
   volumeRain,
) => {
   const windVelocity = metersPersecondToKilometersPerHour(speed);
   const mainTemp = Math.round(kelvinToCelsius(temp));
   const minTemp = Math.floor(kelvinToCelsius(temp_min)) - 3;
   const maxTemp = Math.ceil(kelvinToCelsius(temp_max)) + 4;

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
      correctMaxTempDays.push(Math.ceil(kelvinToCelsius(maxTemp)) + 4);
   });

   minTempDays.forEach(minTemp => {
      correctMinTempDays.push(Math.floor(kelvinToCelsius(minTemp)) - 3);
   });

   if(volumeRain != undefined) {
      const {"1h" : rainOneHour} = volumeRain;
      const {"3h": rainThreeHour} = volumeRain;
      
      if(rainOneHour != undefined) {
         displayWeatherInfo(
            city, 
            mainTemp, 
            minTemp, 
            maxTemp, 
            humidity, 
            country, 
            windVelocity,
            rainOneHour, 
         );
      } else if(rainThreeHour != undefined) {
         displayWeatherInfo(
            city, 
            mainTemp, 
            minTemp, 
            maxTemp, 
            humidity, 
            country, 
            windVelocity,
            rainThreeHour, 
         );
      };
   } else {
      displayWeatherInfo(
         city, 
         mainTemp, 
         minTemp, 
         maxTemp, 
         humidity, 
         country, 
         windVelocity,
      );
   };
  
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