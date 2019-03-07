import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withRouter from "./containers/withRouter";
import VisibleCollection from "./containers/VisibleCollection";

export const Routes = props => (
  <Switch>
    <Route
      path="/records/sort/:sortType"
      render={props => <VisibleCollection {...props} />}
    />
    <Route path="/records" render={props => <VisibleCollection {...props} />} />
    <Route exact path="/" render={() => <Redirect to="/records" />} />
  </Switch>
);

export default withRouter(Routes);
