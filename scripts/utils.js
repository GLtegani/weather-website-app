// IMPORTS
import { UserInput } from "./main.js";

// FUNCTIONS
const capitalizeWords = (sentence) => {
     let phrase = sentence.toLowerCase();
     let words = phrase.split(' ');
   
   for (let i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
   };
   return words.join(' ');
};

const kelvinToCelsius = (temperature) => {
     temperature = temperature - 273.15;
     return temperature;
};

const metersPerSecondToKilometersPerHour = (velocity) => {
     velocity = velocity * 3.6;
     return Math.round(velocity);
};

const displayError = (errorMsg) => {
     UserInput.errorContainer.classList.remove('hide-error');
     UserInput.errorContainer.classList.add('show-error');
     UserInput.errorMsg.textContent = errorMsg;
};

const hideError = () => {
     UserInput.errorContainer.classList.remove('show-error');
     UserInput.errorContainer.classList.add('hide-error');
};

const verifyIfStrHasNumber = (str) => {
     let regex = /\d/;
     return regex.test(str);
};

const takeListDays = (list) => {
     const slicedList = list.slice(7);

     for(let i = 0; i < slicedList.length; i++) {
          return slicedList.filter(object => {
               return object.dt_txt.includes('00:00:00')
          });
     };
};

const unixToDateTime = (unixTime) => {
     const day = new Date(unixTime * 1000);
     let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     return daysOfWeek[day.getDay()];
};

const displayRainCard = (rainVolume) => {
     UserInput.rainCard.classList.remove('hide');
     UserInput.rainCard.classList.add('card');
     UserInput.rain.textContent = `${rainVolume}mm`;
};

const hideRainCard = () => {
     UserInput.rainCard.classList.remove('card');
     UserInput.rainCard.classList.add('hide');
};

// EXPORTS
export { 
     capitalizeWords, 
     kelvinToCelsius, 
     metersPerSecondToKilometersPerHour, 
     displayError,
     hideError,
     verifyIfStrHasNumber,
     unixToDateTime,
     takeListDays,
     displayRainCard,
     hideRainCard,
};