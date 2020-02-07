import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "boston", country: "usa" };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    console.log(this.props.children);
  }
  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }
  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.city}
          onChange={this.handleCityChange}
          name="city"
          placeholder="City"
        />

        <input
          type="text"
          value={this.state.country}
          onChange={this.handleCountryChange}
          name="country"
          placeholder="Country"
        />

        <button
          onClick={() =>
            this.props.getWeather(this.state.city, this.state.country)
          }
        >
          Get Weather
        </button>
      </div>
    );
  }
}
export default Form;
