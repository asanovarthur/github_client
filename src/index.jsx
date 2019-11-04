import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth } from "./Components/Auth";
import { Repository } from "./Components/Repository";
import { Welcome } from "./Components/Welcome";
import { BrowserRouter, Route } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import { Provider } from "react-redux";
import { store } from "./Store/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Security
//         issuer="https://dev-366660.okta.com"
//         client_id="0oa1qhk1xhKgi8c4A357"
//         redirect_uri={`${window.location.origin}/implicit/callback`}
//       >
//         <Route exact path="/" component={Welcome} />
//         <Route exact path="/auth" component={Auth} />
//         <Route exact path="/repo" component={Repository} />
//         <Route exact path="/implicit/callback" component={ImplicitCallback} />
//       </Security>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Security
        issuer="https://dev-366660.okta.com"
        client_id="0oa1qhk1xhKgi8c4A357"
        redirect_uri={`${window.location.origin}/implicit/callback`}
      >
        <App />
      </Security>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
