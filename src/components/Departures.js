import React, { useState, useEffect } from "react";
import "../scss/Departures.scss";
import { departureAPI } from "../api/index";
// import preloader from "../assets/images/preloader.gif";

export const Departures = () => {
  const [mörby, setMörby] = useState([]);
  const [fruängen, setFruängen] = useState([]);
  const [solna, setSolna] = useState([]);
  const [sickla, setSickla] = useState([]);
  // const [error, setError] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      const intervalId = setInterval(async () => {
        try {
          const response = await departureAPI();
          const t_bana = response.data.Departure.filter(
            (object) => object.direction === "Mörby centrum T-bana (Danderyd kn)"
          );

          if (t_bana.length > 5) {
            setMörby(() => {
              return t_bana.slice(1, 5);
            });
          } else {
            setMörby(() => {
              return t_bana;
            });
          }

          const t_bana_13 = response.data.Departure.filter(
            (object) => object.direction === "Fruängen T-bana (Stockholm kn)"
          );

          if (t_bana.length > 5) {
            setFruängen(() => {
              return t_bana_13.slice(1, 5);
            });
          } else {
            setFruängen(() => {
              return t_bana_13;
            });
          }

          const tvär_bana_solna = response.data.Departure.filter(
            (object) => object.direction === "Solna station"
          );

          if (tvär_bana_solna.length > 5) {
            setSolna(() => {
              return tvär_bana_solna.slice(1, 5);
            });
          } else {
            setSolna(() => {
              return tvär_bana_solna;
            });
          }

          const tvär_bana_sickla = response.data.Departure.filter(
            (object) => object.direction === "Sickla station (Nacka kn)"
          );

          if (tvär_bana_solna.length > 5) {
            setSickla(() => {
              return tvär_bana_sickla.slice(1, 5);
            });
          } else {
            setSickla(() => {
              return tvär_bana_sickla;
            });
          }
        } catch (err) {
          console.log(err.message);
        }
      }, 10000);

      return () => clearInterval(intervalId);
    };

    fetchTime();
  }, []);

  return (
    <div className="departures">
      <h4>Liljeholmen</h4>
      <div className="T-bana">
        <div className="info-block">
          <article>
          <p>Mörby-C:</p>
            {mörby.map((train, index) => {
              return <p key={index}> {train.time} </p>;
            })}
          </article>
        </div>
        <div className="info-block">
          <article>
          <p>Fruäng-C:</p>
            {fruängen.map((train, index) => {
              return <p key={index}> {train.time} </p>;
            })}
          </article>
        </div>
      </div>
      <div className="tvärbana">
      <div className="info-block">
          <article>
          <p> Solna-C:</p>
            {solna.map((train, index) => {
              return <p key={index}> {train.time} </p>;
            })}
          </article>
        </div>
        <div className="info-block">
          <article>
          <p> Sickla-C:</p>
            {sickla.map((train, index) => {
              return <p key={index}> {train.time} </p>;
            })}
          </article>
        </div>
      </div>
    </div>
  );
};
