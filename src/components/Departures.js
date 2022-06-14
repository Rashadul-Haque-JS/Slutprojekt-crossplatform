import React, { useState, useEffect } from "react";
import "../scss/Departures.scss";
import { departureAPI } from "../api/index";
// import preloader from "../assets/images/preloader.gif";

export const Departures = () => {
  const [tunnelbana_14, setTunnelbana_14] = useState([]);
  const [tunnelbana_13, setTunnelbana_13] = useState([]);
  const [tvärbana_solna, setTvärbana_solna] = useState([]);
  const [tvärbana_sickla, setTvärbana_sickla] = useState([]);
  // const [error, setError] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await departureAPI();
        const t_bana = response.data.Departure.filter(
          (object) => object.name === "Länstrafik -Tunnelbana 14"
        );

        if (t_bana.length > 6) {
          setTunnelbana_14(t_bana.slice(1, 6));
        } else {
          setTunnelbana_14(t_bana);
        }

        const t_bana_13 = response.data.Departure.filter(
          (object) => object.name === "Länstrafik -Tunnelbana 13"
        );

        if (t_bana.length > 6) {
          setTunnelbana_13(t_bana_13.slice(1, 6));
        } else {
          setTunnelbana_13(t_bana_13);
        }

        const tvär_bana_solna = response.data.Departure.filter(
          (object) => object.direction === "Solna station"
        );

        if (tvär_bana_solna.length > 6) {
          setTvärbana_solna(tvär_bana_solna.slice(1, 6));
        } else {
          setTvärbana_solna(tvär_bana_solna);
        }

        const tvär_bana_sickla = response.data.Departure.filter(
          (object) => object.direction === "Sickla station (Nacka kn)"
        );

        if (tvär_bana_solna.length > 6) {
          setTvärbana_sickla(tvär_bana_sickla.slice(1, 6));
        } else {
          setTvärbana_solna(tvär_bana_sickla);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchTime();
  }, []);

  return (
    <div className="departures">
      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> T-bana : Mörby C</p>
        <div className="textTrack">
          <div className="rollingText">
            {tunnelbana_14.map((train, index) => {
              return <p key={index}> {train.time}** </p>;
            })}
          </div>
        </div>
      </div>
      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> T-bana : Mörby C</p>
        <div className="textTrack">
          <div className="rollingText">
            {tunnelbana_13.map((train, index) => {
              return <p key={index}> {train.time}** </p>;
            })}
          </div>
        </div>
      </div>
      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> Spårväg : Solna S</p>
        <div className="textTrack">
          <div className="rollingText">
            {tvärbana_solna.map((trum, index) => {
              return <p key={index}>{trum.time}** </p>;
            })}
          </div>
        </div>
      </div>
      <div className="trackPlace" style={{ display: "flex" }}>
        <p style={{ paddingRight: "1rem" }}> Spårväg : Solna S</p>
        <div className="textTrack">
          <div className="rollingText">
            {tvärbana_sickla.map((trum, index) => {
              return <p key={index}>{trum.time}** </p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
