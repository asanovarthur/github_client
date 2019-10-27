import React from "react";
import "D:/User/Desktop/github_client/src/css/App.css";
import PropTypes from "prop-types";

export const User = props => {
  const onBtnClick = e => {
    const name = e.currentTarget.innerText;
    props.setName(name); // единственное отличие здесь
  };

  return (
    <div>
      <button onClick={onBtnClick}>some user</button>

      <table className="App-info">
        <tbody>
          <tr>
            <td>Пользователь:</td>
            <td>{props.username}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired
};
