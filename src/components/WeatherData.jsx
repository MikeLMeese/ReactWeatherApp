import React from "react";

const WeatherConditions = ({weatherData}) => {
    console.log(weatherData.main)
    let date = new Date().toLocaleDateString('en-us', { 
        weekday:"short", 
        month:"short", 
        day:"numeric", 
        hour:"numeric", 
        minute:"numeric"
      });
    return (
        <div className="weather">
        <h2 className="city">Today's forecast for {weatherData.name}</h2>
        <h1 className="currentTemp">{weatherData.main.temp}°F</h1>
        <h3 className="highTemp">Today's high will be {weatherData.main.temp_max}°F</h3>
        <h3 className="lowTemp">Today's low will be {weatherData.main.temp_min}°F</h3>
        <h3 className="feelsLike">Today's weather feels like {weatherData.main.feels_like}°F</h3>
        <div className="description">Today's conditions are {weatherData.weather[0].description}</div>
        <div className="humidity">Humidity: {weatherData.main.humidity}%</div>
        <div className="wind-speed">Wind Speed: {weatherData.wind.speed} mph</div>
        <div className="date">{date}</div>
      </div>
    )
}

export default WeatherConditions