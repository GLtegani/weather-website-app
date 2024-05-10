// IMPORTS
import { conectAPI } from './apiConect.js';

// DATA
const UserInput = {
   inputWeather: document.querySelector('input'),
   sendBtn: document.querySelector('button.send-btn'),
   
   // FIRST CARD
   localWeather: document.querySelector('.local-weather'),
   mainTemperature: document.querySelector('.main'),
   maxTemperature: document.querySelector('.max'),
   minTemperature: document.querySelector('.min'),
   windSpeed: document.querySelector('.to-wind'),
   humidity: document.querySelector('.to-damp'),
   rain: document.querySelector('.to-rain'),
   errorContainer: document.querySelector('.error-container'),
   errorMsg: document.querySelector('.error-msg'),

   // SECOND CARD
   dayOne: document.querySelector('.one-day'),
   oneIcon: document.querySelector('.one-icon'),
   oneMax: document.querySelector('.one-max'),
   oneMin: document.querySelector('.one-min'),

   dayTwo: document.querySelector('.two-day'),
   twoIcon: document.querySelector('.two-icon'),
   twoMax: document.querySelector('.two-max'),
   twoMin: document.querySelector('.two-min'),

   dayThree: document.querySelector('.three-day'),
   threeIcon: document.querySelector('.three-icon'),
   threeMax: document.querySelector('.three-max'),
   threeMin: document.querySelector('.three-min'),

   dayFour: document.querySelector('.four-day'),
   fourIcon: document.querySelector('.four-icon'),
   fourMax: document.querySelector('.four-max'),
   fourMin: document.querySelector('.four-min'),
};

// FUNCTION
const sendInfos = event => {
   event.preventDefault();
   conectAPI(UserInput.inputWeather.value);
};

// EVENTS
UserInput.sendBtn.addEventListener('click', sendInfos);

// EXPORTS
export { UserInput };