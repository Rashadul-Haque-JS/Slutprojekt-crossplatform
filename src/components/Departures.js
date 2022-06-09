import React, { useState, useEffect } from "react";
import "../scss/Departures.scss";
import axios from "axios";

export const Departures = () => {
  const [tunnelbana, setTunnelbana] = useState([]);
  const [tvärbana, setTvärbana] = useState([]);

  useEffect(() => {
    const fetchTime = async () => {
      const response = await axios.get(
        "https://api.resrobot.se/v2.1/departureBoard?id=740004046&format=json&accessId=9a9102bb-25cf-4f56-a5a6-9123fe8bc5be"
      );

      const t_bana = response.data.Departure.filter(
        (object) => object.name === "Länstrafik -Tunnelbana 14"
      );

      setTunnelbana(t_bana);

      const tvär_bana = response.data.Departure.filter(
        (object) => object.name === "Länstrafik - Spårväg 30"
      );

      setTvärbana(tvär_bana);
    };

    fetchTime();
  });

  return (
    <div className="departures">
      {tunnelbana.map((data, index) => {
        const newData = tunnelbana.pop(data)
       return <p key={index}>{newData.time}</p>;
      })}

      {tvärbana.map((data, index) => {
        const newData = tunnelbana.pop(data)
       return <p key={index}>{newData.time}</p>;
      })}
    </div>
  );
};
