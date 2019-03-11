import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import VisibleCollection from "./containers/VisibleCollection";

export const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/records/sort/:sortType"
        render={() => <VisibleCollection />}
      />
      <Route path="/records" render={() => <VisibleCollection />} />
      <Route exact path="/" render={() => <Redirect to="/records" />} />
    </Switch>
  </Router>
);

export default Routes;
