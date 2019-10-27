import React from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import "D:/User/Desktop/github_client/src/css/App.css";

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой GitHub клиент</h1>
      </header>
      <User user={props.user.user} />
      <Page repository={props.page.repository} />
    </div>
  );
};

const mapStateToProps = (store: any) => {
  return {
    user: store.user,
    page: store.page
  };
};

export default connect(mapStateToProps)(App);
