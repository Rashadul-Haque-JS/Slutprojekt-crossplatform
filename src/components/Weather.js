import React, { useState, useEffect } from "react";
import "../scss/Weather.scss";
import axios from "axios";

export const Weather = () => {
  const [weather, setWeather] = useState({
    temp: 0,
    feels: 0,
    min: 0,
    max: 0,
    icon: "",
  });

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=9fc24343cc8f14c8d53f63eabf338c4f&&units=metric"
      );
      setWeather({
        temp: response.data.main.temp,
        feels: response.data.main.feels_like,
        min: response.data.main.temp_min,
        max: response.data.main.temp_max,
        icon: response.data.weather[0].icon,
      });
    };
    fetchWeather();
  }, []);


  return (
    <div className="weather">
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="weather-icon"
      />

      <h1>Nu: {weather.temp}°C</h1>
      <h2>Känns som : {weather.feels}°C</h2>
      <h3>Dagens minst: {weather.min}°C</h3>
      <h3>Dagens max {weather.max}°C</h3>
    </div>
  );
};
