import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CollectionList from "./CollectionList";
import CollectionItem from "./CollectionItem";

class Collection extends Component {
  render() {
    const {
      match,
      pagination,
      releases,
      release,
      artist,
      addToVisited,
      visitedReleases
    } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.path}/release/:recordId`}
          render={props => {
            return (
              <CollectionItem
                collectionPath={match.path}
                release={release}
                artist={artist}
                addToVisited={addToVisited}
                {...props}
              />
            );
          }}
        />
        <Route
          path={`${match.path}`}
          render={props => (
            <CollectionList
              releases={releases}
              visitedReleases={visitedReleases}
              {...props}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Collection;
