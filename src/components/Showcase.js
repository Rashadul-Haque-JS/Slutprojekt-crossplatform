/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../scss/Showcase.scss";
import programs  from "./program.json";

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
      <img src={programs[index].image} />
      <h1>{programs[index].program_name}</h1>
      <h1>{programs[index].Last_date}</h1>
    </div>
  );
};
