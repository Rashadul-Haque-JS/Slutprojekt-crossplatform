import React, { useState, useEffect } from "react";
import "../scss/Weather.scss";
import axios from "axios";

export const Weather = () => {
  const [weather, setWeather] = useState({ temp: 0, feels: 0, min: 0, max: 0 });

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
      });
    };
    fetchWeather();
  }, []);

  return (
    <div className="weather">
      <h1>Nu: {weather.temp}</h1>
      <h2>Känns som : {weather.feels}</h2>
      <h3>Dagens minst: {weather.min}</h3>
      <h3>Dagens max {weather.max}</h3>
    </div>
  );
};
