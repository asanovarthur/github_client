import React from "react";
import "../css/App.css";
import PropTypes from "prop-types";
import { Navigation } from "./Navigation";

export const Repository = props => {
  const onBtnClick = () => {
    props.changeStatus();
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="wrap">
        <div className="info-block">
          <img
            src="./static/img/naruto-meditating.gif"
            className="naruto-image-3"
          ></img>

          <div className="text">
            <p>
              Наконец-то ты нашёл то, зачем пришёл! Перед тобой - страничка
              репозитория на моковых (пока что!) данных.!
            </p>
            <p>Давай посмотрим, что тут у нас.</p>
            <p>
              P.S. Кстати, все данные передаются в этот компонент с помощью
              <a href="https://redux.js.org/">Redux</a> - библиотеки управления
              состоянием приложения.
            </p>
          </div>

          <div className="repository-info">
            <h3>Информация о репозитории {props.name}</h3>
            <table>
              <tbody>
                <tr>
                  <td>Владелец:</td>
                  <td>{props.owner}</td>
                </tr>
                <tr>
                  <td>Статус:</td>
                  <td>{props.status}</td>
                </tr>
                <tr>
                  <td>Количество веток:</td>
                  <td>{props.branchesAmount}</td>
                </tr>
                <tr>
                  <td>Количество коммитов:</td>
                  <td>{props.commitsAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="change-status-block">
            <p>
              Ещё кое-что - нажав по кнопке внизу, ты изменишь статус этого
              репозитория (только не забудь, побаловавшись, вернуть его
              изначальное значение!).
            </p>
            <button onClick={onBtnClick}>Изменить статус</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  branchesAmount: PropTypes.number.isRequired,
  commitsAmount: PropTypes.number.isRequired,
  changeStatus: PropTypes.func.isRequired
};
