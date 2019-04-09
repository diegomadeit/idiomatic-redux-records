import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import VisibleCollection from "./containers/VisibleCollection";
import VisibleVisitedReleases from "./containers/VisibleVisitedReleases";
import VisibleCollectionItem from "./containers/VisibleCollectionItem";

export const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/records/release/:artistId/:recordId"
        render={() => <VisibleCollectionItem collectionPath={"/records"} />}
      />
      <Route
        path="/records/:sortType?"
        render={() => (
          <>
            <VisibleCollection />
            <VisibleVisitedReleases />
          </>
        )}
      />
      <Route exact path="/" render={() => <Redirect to="/records" />} />
    </Switch>
  </Router>
);

export default Routes;
