import React from "react";
import { Link } from "react-router-dom";
import WeatherInfoComponent from "./WeatherInfoComponent";
import Collapsible from 'react-collapsible';
import { BrowserRouter as Router, Route } from "react-router-dom";

const WeatherDataDayComponent = ({ day, setSelectedDay, selectedDay }) => {
  const dayMap = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };
  const getDayName = date => {
    return dayMap[new Date(date).getDay()];
  };
  const getIcon = icon => {
    return "http://openweathermap.org/img/w/" + icon + ".png";
  };

  const generate_heading = day =>{
    return <div className="row">
    <div className='col-3'>
      <label>{dayMap[new Date(day.dt_txt).getDay()]}</label>
    </div>
    <div className='col-3'>
      <label>Min: {day.main.temp_min}</label>
    </div>
    <div className='col-3'>
      <label>Max: {day.main.temp_max}</label>
    </div>
    <div className='col-3'>
      <img className='weather-image'
       src={getIcon(day.weather[0].icon)}
       alt={day.weather[0].main}
        ></img>
    </div>
  </div>
  }

  return (
    <div className="collapsible-div">
    <Collapsible trigger = {generate_heading(day[0])}>
    {day!=null &&
      day.map((entry) => (
        <Router>
          <Route
            to="/xyz"
            render={() => <WeatherInfoComponent
                            day={entry}
                            key={entry.dt} />}
          />
        </Router>

      ))}

      </Collapsible>
    </div>
  );
};
export default WeatherDataDayComponent;
