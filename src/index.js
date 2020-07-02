import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Login from "./components/login";
import ResetPassword from "./components/reset-password";
import Home from "./components/home";
import MessageApp from "./reducers";

const store = createStore(MessageApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" exact render={props => (<Login />)} />
        <Route path="/reset-password" render={props => (<ResetPassword key="resetpassword" />)} />
        <Route path="/" exact render={props => (<Home key="home" />)} />
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
