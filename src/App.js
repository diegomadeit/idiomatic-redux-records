import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Collection from "./views/Collection/Collection";
import withRouter from "./containers/withRouter";
import { Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route path="/records" render={props => <Collection {...props} />} />
        <Route exact path="/" render={() => <Redirect to="/records" />} />
      </div>
    );
  }
}

export default withRouter(App);
