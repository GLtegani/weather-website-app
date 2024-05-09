// IMPORTS
import { conectAPI } from './apiConect.js';
import { displayWeatherInfo } from './displayWeather.js';
// DATA
const UserInput = {
   inputWeather: document.querySelector('input'),
   sendBtn: document.querySelector('button.send-btn'),
   
   localWeather: document.querySelector('.local-weather'),
   mainTemperature: document.querySelector('.main'),
   maxTemperature: document.querySelector('.max'),
   minTemperature: document.querySelector('.min'),
   windSpeed: document.querySelector('.to-wind'),
   humidity: document.querySelector('.to-damp'),
   rainForecast: document.querySelector('.to-rain'),
   errorContainer: document.querySelector('.error-container'),
   errorMsg: document.querySelector('.error-msg'),
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