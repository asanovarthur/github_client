import React from "react";
import { PageProps } from "../types/page/types";
import "D:/User/Desktop/github_client/src/css/App.css";

export const Page: React.FC<PageProps> = props => {
  return (
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
  );
};
