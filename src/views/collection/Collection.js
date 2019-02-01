import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { fetchRecords } from "../../data/api/records";
import CollectionList from "./CollectionList";
import CollectionItem from "./CollectionItem";

class Collection extends Component {
  state = { releases: [], pagination: {}, loaded: false };

  componentDidMount() {
    fetchRecords().then(({ releases, pagination }) => {
      this.setState({ releases, pagination, loaded: true });
    });
  }

  render() {
    const { releases, pagination, loaded } = this.state;
    const { match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.path}/:recordId`}
          render={props => {
            return <CollectionItem collectionPath={match.path} {...props} />;
          }}
        />
        <Route
          path={`${match.path}`}
          render={props =>
            loaded ? (
              <CollectionList releases={releases} {...props} />
            ) : (
              <div>Loading</div>
            )
          }
        />
      </Switch>
    );
  }
}

export default Collection;
