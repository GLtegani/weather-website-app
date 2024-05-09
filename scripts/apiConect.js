// IMPORTS
import { getWeatherData } from "./getWeatherData.js";
import { displayError, hideError, capitalizeWords, verifyIfStrHasNumber } from "./utils.js";
import { apiKey } from "./apiData.js";
import { UserInput } from "./main.js";

const conectAPI = async (local) => {
  try {
    const stringHasNumber = verifyIfStrHasNumber(local);
    
    if(local == '' || stringHasNumber == true) {
      UserInput.inputWeather.value = '';
      throw new Error('Enter a correct location');
    };

    hideError();
    local = capitalizeWords(local);
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}`
    const response = await fetch(endpoint);
    
    if(!response.ok) {
      UserInput.inputWeather.value = '';
      throw new Error('Unable to connect to endpoint.');
    };
    
    hideError();
    return await getWeatherData(response.json());
  } catch (error) {
    displayError(error);
  };
};

// EXPORTS
export { conectAPI };