import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";  // wrap this around everything for redux
import store from "../store";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from './layout/Alerts';

// Alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    )
  }
}

// Render the App component to the "app" div inside the index.html:
render(<App />, document.getElementById("app"));