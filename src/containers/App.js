import React from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import "D:/User/Desktop/github_client/src/css/App.css";
import { setName } from "../actions/UserActions";

const App = props => {
  const { user, page, setNameAction } = props;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой GitHub клиент</h1>
      </header>
      <User username={user.username} setName={setNameAction} />
      <Page repository={page.repository}/>
    </div>
  );
};

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNameAction: name => dispatch(setName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
