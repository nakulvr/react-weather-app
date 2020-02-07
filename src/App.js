import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import WeatherDataListComponent from "./components/WeatherDataListComponent";
import getDays from "./services/DateConversionService";
import getWeatherService from "./services/OpenWeatherService";

class App extends Component {
  state = { city: "", country: "", days: [] };
  getWeather = (city, country) => {
    // add api validation here
    if (city === "" || country === "") {
      this.setState({ city: "", country: "", days: [] });
    } else {
      getWeatherService(city, country).then(data => {
        var days = "";
        //var days = getDays(data.list);
        // console.log("printing days")
        console.log(data)
        this.setState({ city: city, country: country, days: days });
      });
    }
  };
  render() {
    return (
      <Router>
        <Form getWeather={this.getWeather}></Form>
        <Route
          to="/"
          render={() => <WeatherDataListComponent days={this.state.days} />}
        />
      </Router>
    );
  }
}

export default App;
