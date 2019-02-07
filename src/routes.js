import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withRouter from "./containers/withRouter";
import SortedCollection from "./containers/SortedCollection";

export const Routes = props => (
  <Switch>
    <Route path="/records" render={props => <SortedCollection {...props} />} />
    <Route exact path="/" render={() => <Redirect to="/records" />} />
  </Switch>
);

export default withRouter(Routes);
