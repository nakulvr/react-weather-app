import React from "react";

import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
const FiveDayWeather=({props})=> {
    
    
        return(
            <div>
            <Titles />
            <Form getWeather = {props.getWeather}/>
            <Weather 
            temperature= {props.temperature}
            city= {props.city}
            country= {props.country}
            humidity= {props.humidity}
            description= {props.description}
            temp_max= {props.temp_max}
            temp_min= {props.temp_min}
            icon= {props.icon}
            main={props.main}
            error= {props.error}
            />
            </div>
        );
    
};
export default FiveDayWeather;