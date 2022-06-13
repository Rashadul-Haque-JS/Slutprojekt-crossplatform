import React, { useState, useEffect } from "react";
import "../scss/Weather.scss";

import { weatherAPI } from "../api/index";

export const Weather = () => {
  const [weather, setWeather] = useState({
    temp: 0,
    feels: 0,
    min: 0,
    max: 0,
    icon: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await weatherAPI()
        setWeather({
          name: response.data.name,
          temp: response.data.main.temp,
          feels: response.data.main.feels_like,
          min: response.data.main.temp_min,
          max: response.data.main.temp_max,
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].main,
          
        });
        console.log(response.data.weather[0].main);
      };
    fetchWeather();
  }, []);


  return (
    <div className="weather">
      <article  className="location">
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather-icon" width='60px'
          />
          <h2>{weather.name}</h2>
          <h1>{weather.temp}°C</h1>
          <h3>{weather.description}</h3>
      </article>

      <div  className="info-block">
        <article className="weather-info">
          {/* <h2>Other Info</h2> */}
          <h4>Känns som : {weather.feels}°C</h4>
          <h4>Dagens minst: {weather.min}°C</h4>
          <h4>Dagens max: {weather.max}°C</h4>
        </article>
        <article className="next-weather">
            <h2>coming soon next weather</h2>
        </article>
      </div>

    </div>
  );
};
