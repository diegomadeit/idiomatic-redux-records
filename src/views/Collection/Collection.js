import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { fetchRecords } from "../../data/api/records";
import CollectionList from "./CollectionList";
import CollectionItem from "./CollectionItem";

class Collection extends Component {
  state = { releases: [], pagination: {} };

  componentDidMount() {
    fetchRecords().then(({ releases, pagination }) => {
      this.setState({ releases, pagination });
    });
  }

  getRelease = id => {
    return this.state.releases.find(
      release => release.id === Number.parseInt(id)
    );
  };

  render() {
    const { releases, pagination } = this.state;
    const { match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.path}/:recordId`}
          render={props => {
            const { recordId } = props.match.params;
            const release = this.getRelease(recordId);
            return (
              <CollectionItem release={release} collectionPath={match.path} />
            );
          }}
        />
        <Route
          path={`${match.path}`}
          render={props => <CollectionList releases={releases} {...props} />}
        />
      </Switch>
    );
  }
}

export default Collection;
