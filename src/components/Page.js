import React from "react";
import "D:/User/Desktop/github_client/src/css/App.css";
import PropTypes from "prop-types";

export const Page = props => {
  return (
    <div>
      <table className="App-info">
        <tbody>
          <tr>
            <td>Название репозитория:</td>
            <td>{props.repository.name}</td>
          </tr>
          <tr>
            <td>Описание репозитория:</td>
            <td>{props.repository.description}</td>
          </tr>
          <tr>
            <td>Статус репозитория:</td>
            <td>{props.repository.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Page.propTypes = {
  repository: {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }
};
