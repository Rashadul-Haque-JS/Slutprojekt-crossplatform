/* eslint-disable */
import React, { useState, useEffect } from "react";
import moment from "moment";
import "../scss/Quoto.scss";
import quotes from "../assets/quotes.json";

export const Quoto = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const newDay = "0:00:00";
    let currentTime = null;
    const intervalID = setInterval(() => {
      currentTime = moment().format("H:mm:ss");
      setIndex((index) => {
        if (index < quotes.length - 1 && currentTime === newDay) {
          return index + 1;
        } else if (index === quotes.length - 1) {
          return 0;
        } else {
          return index;
        }
      });
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const qod = quotes[index];
  console.log(quotes.length)

  return (
    <div className="quoto">
      <h1 className="headline">Dagens quoto</h1>
      {qod && qod.text && <p className="info">❝{qod.text}❞</p>}
      {!qod && <p className="error">Something wrong!</p>}
      {qod && qod.author && <p className="info">by {qod.author}</p>}
      {!qod && <p className="error">Anonymous</p>}
    </div>
  );
};
