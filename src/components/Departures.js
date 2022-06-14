import React, { useState, useEffect } from "react";
import "../scss/Departures.scss";
import { departureAPI } from "../api/index";

export const Departures = () => {
  const [tunnelbana, setTunnelbana] = useState([]);
  const [tvärbana, setTvärbana] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      const intervalId = setInterval(async()=>{
        try {
          const response = await departureAPI()

          const t_bana = response.data.Departure.filter(
            (object) => object.name === "Länstrafik -Tunnelbana 14"
          );

          if (t_bana.length > 10) {
            setTunnelbana(t_bana.slice(1, 11));
          } else {
            setTunnelbana(t_bana);
          }

          const tvär_bana = response.data.Departure.filter(
            (object) => object.name === "Länstrafik - Spårväg 30"
          );

          if (tvär_bana.length > 10) {
            setTvärbana(tvär_bana.slice(1, 11));
          } else {
            setTvärbana(tvär_bana);
          }

        } catch (err) {
          if (err.message) setError("Underhållning pågår!");
        }



      },3000)
      return () => clearInterval(intervalId);
    };

    fetchTime();
  }, []);

  return (
    <div className="departures">

      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> T-bana : Mörby C</p>
        <div className="textTrack">
          <div className="rollingText" >
            {tunnelbana.map((train, index) => {
              return <p key={index}> {train.time}** </p>;
            })}
          </div>
        </div>
      </div>
      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> Spårväg : Solna S</p>
        <div className="textTrack">
          <div className="rollingText" >
            {tvärbana.map((trum, index) => {
              return <p key={index}>{trum.time}** </p>;
            })}
          </div>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
};
