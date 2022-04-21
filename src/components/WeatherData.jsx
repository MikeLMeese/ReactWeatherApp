import React from "react";

const WeatherConditions = (props) => {
    let date = new Date().toLocaleDateString('en-us', { 
        weekday:"short", 
        month:"short", 
        day:"numeric", 
        hour:"numeric", 
        minute:"numeric"
      });
    return (
        <div className="weather">
        <h2 className="city">Today's forecast for {props.weatherData.name}</h2>
        <h1 className="currentTemp">{props.weatherData.temp}°F</h1>
        <h3 className="highTemp">Today's high will be {props.weatherData.temp_max}°F</h3>
        <h3 className="lowTemp">Today's low will be {props.weatherData.temp_min}°F</h3>
        <img src={props.weatherData.icon} alt="weatherData icon" className="icon" />
        <div className="description">{props.weatherData.description}</div>
        <div className="humidity">Humidity: {props.weatherData.humidity}%</div>
        <div className="wind-speed">Wind Speed: {props.weatherData.speed} mph</div>
        <div className="date">{date}</div>
      </div>
    )
}

export default WeatherConditions