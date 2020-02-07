// import iconMap from "";
import React from "react";
const WeatherInfoComponent = ({ day }) => {
  const getIcon = icon => {
    return "http://openweathermap.org/img/w/" + icon + ".png";
  };
  return (
    <>
      {day !== null && (
        <div className="weather-entry">
          <ul>
          <img className='weather-image'
           src={getIcon(day.weather[0].icon)}
           alt={day.weather[0].main}
            ></img>

            <li>
             <text> <text style={{ fontWeight: 'bold' }}>Time</text> : {day.dt_txt}</text>
             </li>
            <li>
            <text> <text style={{ fontWeight: 'bold' }}>Temp_max</text> : {day.main.temp_max}</text>
            </li>
            <li>
            <text> <text style={{ fontWeight: 'bold' }}>Temp_min</text> : {day.main.temp_min}</text>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default WeatherInfoComponent;
