// IMPORTS
import { captureUserInput } from './captureUserInput.js';
// DATA
const UserInput = {
   inputWeather: document.querySelector('input'),
   sendBtn: document.querySelector('button.send-btn'),
   
   localWeather: document.querySelector('.local-weather'),

};


// FUNCTION
const sendInfos = event => {
   event.preventDefault();
   captureUserInput(UserInput.inputWeather.value);
};


// EVENTS
UserInput.sendBtn.addEventListener('click', sendInfos);