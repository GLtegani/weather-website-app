// IMPORTS
import { apiKey } from "./apiData.js";

// FUNCTION
const captureUserInput = async (local) => {
   try {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q={${local}}&appid={${apiKey}}`
      const response = await fetch(endpoint);

      if(!response.ok) {
         throw new Error('Unable to connect to endpoint.');
      };

      const localData = response.json();
      console.log(localData);

   } catch (error) {
      console.error(error);
   };
};

// EXPORTS
export { captureUserInput };