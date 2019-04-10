import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Collection from "./views/collection/Collection";
import VisibleCollectionItem from "./containers/VisibleCollectionItem";

export const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/records/release/:artistId/:recordId"
        render={() => <VisibleCollectionItem collectionPath={"/records"} />}
      />
      <Route path="/records/:sortType?" render={() => <Collection />} />
      <Route exact path="/" render={() => <Redirect to="/records" />} />
    </Switch>
  </Router>
);

export default Routes;
