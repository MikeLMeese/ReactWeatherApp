import React, { useState } from "react";
import WeatherConditions from "./WeatherData";

const apiKey = "4f41cf693e121f787b9c0acd1d07736d";

const FetchWeatherByZipCode = () => {

    let [zipCode, setZipCode] = useState();
    let [weatherData, setWeatherData] = useState({});

function getWeatherData(e) {
    e.preventDefault();
    setWeatherData({});
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`
    )
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            return "Error: Unknown location"
        }
        setWeatherData(response);
    });
}

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getWeatherData}>
                <input
                    type="text"
                    placeholder="Enter zip code"
                    className="searchBar"
                    onChange={(e) => setZipCode(e.target.value)}
                    />
                <button type="submit">
                <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.023,16.977c-0.513-0.488-1.004-0.997-1.367-1.384c-0.372-0.378-0.596-0.653-0.596-0.653l-2.8-1.337 C15.34,12.37,16,10.763,16,9c0-3.859-3.14-7-7-7S2,5.141,2,9s3.14,7,7,7c1.763,0,3.37-0.66,4.603-1.739l1.337,2.8 c0,0,0.275,0.224,0.653,0.596c0.387,0.363,0.896,0.854,1.384,1.367c0.494,0.506,0.988,1.012,1.358,1.392 c0.362,0.388,0.604,0.646,0.604,0.646l2.121-2.121c0,0-0.258-0.242-0.646-0.604C20.035,17.965,19.529,17.471,19.023,16.977z M9,14 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S11.757,14,9,14z"></path>
          </svg>
                </button>
            </form>
            {(typeof weatherData.main != 'undefined') ? (
            <WeatherConditions
               weatherData={weatherData}
               />
            ): (
                <div></div>
            )}
        </div>
    )
}
export default FetchWeatherByZipCode;
