import React, { useState, useEffect } from "react";
import "../scss/Departures.scss";
import axios from "axios";

export const Departures = () => {
  const [tunnelbana, setTunnelbana] = useState([]);
  const [tvärbana, setTvärbana] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get(
          "https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=9a9102bb-25cf-4f56-a5a6-9123fe8bc5be"
        );

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
    };

    fetchTime();
  }, []);

  return (
    <div className="departures">

      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> T-bana : Mörby C</p>
        <div className="textTrack">
          <div className="tunnelbana rollingText" style={{ display: "flex" }}>
            {tunnelbana.map((train, index) => {
              return <p key={index}> {train.time}** </p>;
            })}
          </div>
        </div>
      </div>
      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> Spårväg : Solna station</p>
        <div className="textTrack">
          <div className="tvärbana rollingText" style={{ display: "flex" }}>
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
