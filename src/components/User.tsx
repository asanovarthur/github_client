import React from "react";
import { UserProps } from "../types/user/types";
import "D:/User/Desktop/github_client/src/css/App.css";

export const User: React.FC<UserProps> = props => {
  return (
    <table className="App-info">
      <tbody>
        <tr>
          <td>Пользователь:</td>
          <td>{props.user.username}</td>
        </tr>
      </tbody>
    </table>
  );
};
