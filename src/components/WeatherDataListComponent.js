import React, { useState } from "react";
import WeatherDataDayComponent from "./WeatherDataDayComponent";
const WeatherDataListComponent = ({ days }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  console.log("DL comp")
  console.log(days);
  return (
    <div>
      <ul>
        {days != null &&
          days.map((day) => (
            <WeatherDataDayComponent
              day={day}
              key={day[0].dt}
              setSelectedDay={setSelectedDay}
              selectedDay={selectedDay}
            />
          ))}
      </ul>
    </div>
  );
};
export default WeatherDataListComponent;
