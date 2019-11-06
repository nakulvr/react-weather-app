import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = 'a8ad473069f2d8454baa5cea980f72f7';

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    temp_max: undefined,
    temp_min: undefined,
    icon: undefined,
    main: undefined,
    error: undefined
  }
  getWeather = async (e) => { //arrow functions allow to use the this keyword independently
   e.preventDefault();
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
  //const api_weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const api_weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}id=524901&appid=${API_KEY}&units=metric`);
    //const api_call = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a8ad473069f2d8454baa5cea980f72f7');
    //async useful for http calls
    const data = await api_weather.json(); //converts api to json for readability
    if(city && country) {
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      icon: data.weather[0].icon,
      main: data.weather[0].main,
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      temp_max: undefined,
      temp_min: undefined,
      icon: undefined,
      main: undefined,
      error: "Please enter a city and country."
    });
  }
  }
  //returns jsx, dsiplays the data that goes inside the component
  render(){
    //can only return one paretn element
    return(

      <div>
      <Titles />
      <Form getWeather = {this.getWeather}/>
      <Weather 
      temperature= {this.state.temperature}
      city= {this.state.city}
      country= {this.state.country}
      humidity= {this.state.humidity}
      description= {this.state.description}
      temp_max= {this.state.temp_max}
      temp_min= {this.state.temp_min}
      icon= {this.state.icon}
      main={this.state.main}
      error= {this.state.error}
      />
      </div>
    );
  }
};

export default App;
