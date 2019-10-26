import React from "react";
import { connect } from "react-redux";
import { RepositoryProps } from "D:/User/Desktop/github_client/src/repository/types";
import "./App.css";

const App: React.SFC<RepositoryProps> = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой GitHub клиент</h1>
      </header>
      <table className="App-info">
        <tbody>
          <tr>
            <td>Пользователь:</td>
            <td>{props.user}</td>
          </tr>
          <tr>
            <td>Название репозитория:</td>
            <td>{props.repositoryInfo.name}</td>
          </tr>
          <tr>
            <td>Описание репозитория:</td>
            <td>{props.repositoryInfo.description}</td>
          </tr>
          <tr>
            <td>Статус репозитория:</td>
            <td>{props.repositoryInfo.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (store: any) => {
  console.log(store);
  return {
    user: store.user,
    repositoryInfo: store.repositoryInfo,
    commits: store.commits
  };
};

export default connect(mapStateToProps)(App);
