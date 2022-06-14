import React, { useState, useEffect } from "react";
import "../scss/Weather.scss";
import { weatherAPI } from "../api/index";
import preloader from "../assets/images/preloader.gif";

export const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await weatherAPI();
        setWeather(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="weather">
      {weather && (
        <>
          <article className="location">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-icon"
              width="60px"
            />
            <h2>Stockholm</h2>
            <h1>{weather.main.temp}°C</h1>
            {/* <h3>{weather.description}</h3> */}
          </article>

          <div className="info-block">
            <article className="weather-info">
              {/* <h2>Other Info</h2> */}
              <h4>Känns som : {weather.main.feels_like}°C</h4>
              <h4>Dagens minst: {weather.main.temp_min}°C</h4>
              <h4>Dagens max: {weather.main.temp_max}°C</h4>
            </article>
            <article className="next-weather">
              <h2>coming soon next weather</h2>
            </article>
          </div>
        </>
      )}
      {!weather && (
        <>
          {/* styles lilbit */}
          <img src={preloader} alt="Preloader" />
        </>
      )}
    </div>
  );
};
