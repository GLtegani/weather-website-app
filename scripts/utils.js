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

const fahrenheitToCelsius = (temperature) => {
     temperature = temperature - 273.15;
     return temperature.toFixed(1);
};

const metersPersecondToKilometersPerHour = (velocity) => {
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

// EXPORTS
export { 
     capitalizeWords, 
     fahrenheitToCelsius, 
     metersPersecondToKilometersPerHour, 
     displayError,
     hideError,
};