// IMPORTS
import { APIData } from './apiData.js';

// DATA
const UserInput = {
   inputWeather: document.querySelector('input'),
   sendBtn: document.querySelector('button.send-btn'),
   
   localWeather: document.querySelector('.local-weather'),

};


// FUNCTION
const sendInfos = event => {
   event.preventDefault();

   console.log(UserInput.inputWeather.value);
};


// EVENTS
UserInput.sendBtn.addEventListener('click', sendInfos);


// EXPORTS