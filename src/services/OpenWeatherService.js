import axios from "axios";
import API_KEY from "../ENV";
const getWeather = (city, country) => {
  return axios
    .get(
      "http://localhost:8080/book" , {
        auth: {
          user: 'sonia@neu.com',
          password: '123456789'
        }
      }
        
    )
    .then(response => response.data)
    .catch(error => console.log(error));
};
export default getWeather;
