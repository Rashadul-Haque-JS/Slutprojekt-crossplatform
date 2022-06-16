import React, { useState, useEffect } from "react";
import "../scss/Weather.scss";
import { weatherAPI } from "../api/index";
import preloader from "../assets/images/preloader.gif";

export const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const response = await weatherAPI();
      setWeather(() => {
        return response.data;
      });
    }, 5000);
    return () => clearInterval(intervalId);
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
            <h1 style={{ fontSize: "2.5vh" }}>Stockholm</h1>
            <h1 style={{ fontSize: "3vh" }}>{weather.main.temp}°C</h1>
            {/* <h3>{weather.description}</h3> */}
          </article>

          <div className="info-block">
            <article className="weather-info">
              <span>
                <h2>Känns</h2>
                <h2>{weather.main.feels_like}°C</h2>
              </span>
              <span>
                <h2>Minst</h2>
                <h2>{weather.main.temp_min}°C</h2>
              </span>
              <span>
                <h2>Max</h2>
                <h2>{weather.main.temp_max}°C</h2>
              </span>
            </article>
            <article className="next-weather">
              <h2 style={{ fontSize: "2vh", textTransform: "capitalize" }}>
                {weather.weather[0].description}
              </h2>
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

// COMMENTS FOR PUSH AFTER CHANGED
