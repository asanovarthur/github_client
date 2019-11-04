import React, { useState, useEffect } from "react";
import "../css/App.css";
import { Navigation } from "./Navigation";

export const Welcome = () => {
  const [time, setTime] = useState(new Date());
  useEffect(clock);

  function clock() {
    const interval = setInterval(() => setTime(new Date()));

    return cleanup;

    function cleanup() {
      clearInterval(interval);
    }
  }

  const currentTime = <span>{time.toLocaleString()}</span>;

  return (
    <div>
      <Navigation></Navigation>
      <div className="wrap">
        <div className="info-block">
          <img
            src="./static/img/naruto-talking.gif"
            className="naruto-image"
          ></img>

          <div className="text">
            <h3>
              Добро пожаловать, <span className="colored-span">даттебайо</span>!
            </h3>
            <p>Рад видеть тебя на своём GitHub-клиенте.</p>
            <p>
              В будущем он примет иной вид, а пока что предлагаю тебе
              ознакомиться с тем, что есть на данный момент ({currentTime}).
            </p>
            <p>Enjoy!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
