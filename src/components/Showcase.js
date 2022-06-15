/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../scss/Showcase.scss";
import programs from "../assets/program.json";


export const Showcase = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((index) => {
        if (index < programs.length - 1) {
          return index + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="showcase">
      <img src={require(`../assets/images/${programs[index].program_name}.png`)}/>
      <article>
        <h1 style={{fontSize:'3vh'}}>{programs[index].program_name}</h1>
        <h2 style={{fontSize:'2.5vh'}}>{programs[index].poäng}</h2>
        <h3 style={{fontSize:'2.2vh'}}>{programs[index].ort}</h3>
        <p style={{color: programs[index].program_name == 'agil-utvecklare' ? 'red': 'black', fontSize:'1.8vh' }}>Application deadline: {programs[index].Last_date}</p>
        <p style={{fontSize:'1.8vh'}}>Start date: {programs[index].start}</p>
        <p className="info">More on: https://www.iths.se/utbildningar</p>
      </article>
    </div>
  );
};
