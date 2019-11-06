import React from "react";


class Weather extends React.Component{
    render(){
        return(
            <div>
            
            {this.props.city && this.props.country && <p> Location: {this.props.city}, {this.props.country} </p>}
            {this.props.temperature && this.props.temp_max && this.props.temp_min && <p> Temperature (C): {this.props.temperature},
            High: {this.props.temp_max},
            Low: {this.props.temp_min} </p>}
            {this.props.humidity && <p> Humidity %: {this.props.humidity} </p> }
            {this.props.main && this.props.description && <p> Conditions: {this.props.main}, {this.props.description} </p>}
            {this.props.icon && <p> {this.props.icon} </p>}
            {this.props.error && <p> {this.props.error} </p>} 
            </div>
        );
    }
};
export default Weather;