import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withRouter from "./containers/withRouter";
import Collection from "./views/collection/Collection";

export const Routes = props => (
  <Switch>
    <Route path="/records" render={props => <Collection {...props} />} />
    <Route exact path="/" render={() => <Redirect to="/records" />} />
  </Switch>
);

export default withRouter(Routes);
