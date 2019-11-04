import React from "react";
import "../css/App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Auth } from "./Auth";
import { Repository } from "./Repository";

export const Navigation = () => {
  return (
    <div className="navigation-panel">
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/repo">Репозиторий</Link>
          </li>
          <li>
            <Link to="/auth">Авторизация</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
