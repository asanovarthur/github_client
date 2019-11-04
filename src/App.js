import React from "react";
import "./css/App.css";
import { Navigation } from "./Components/Navigation";
import { Repository } from "./Components/Repository";
import { connect } from "react-redux";
import { changeStatus } from "./Actions/RepositoryActions";
import { Welcome } from "./Components/Welcome";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Auth } from "./Components/Auth";
import { ImplicitCallback } from "@okta/okta-react";

const App = props => {
  const { repository, changeStatusAction } = props;
  return (
    <div>
      {/* <Repository 
      name={repository.name} 
      owner={repository.owner}
      status={repository.status}
      branchesAmount={repository.branchesAmount}
      commitsAmount={repository.commitsAmount}
      changeStatus={changeStatusAction}></Repository> */}
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/auth" component={Auth} />
        <Route
          exact
          path="/repo"
          // component={Repository}
          render={props => (
            <Repository
              {...props}
              name={repository.name}
              owner={repository.owner}
              status={repository.status}
              branchesAmount={repository.branchesAmount}
              commitsAmount={repository.commitsAmount}
              changeStatus={changeStatusAction}
            />
          )}
        />
        <Route exact path="/implicit/callback" component={ImplicitCallback} />
      </Switch>
    </div>
  );
};

// ----------------Redux----------------

const mapStateToProps = store => {
  console.log(store);
  return {
    repository: store.repository
  };
};

const mapDispatchToProps = dispatch => ({
  changeStatusAction: () => dispatch(changeStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
