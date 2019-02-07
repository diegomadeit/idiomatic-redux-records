import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CollectionList from "./CollectionList";
import CollectionItem from "./CollectionItem";
import Loader from "../../components/common/Loader";

class Collection extends Component {
  state = { loaded: false };

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    const { match, pagination, releases } = this.props;

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
              <Loader />
            )
          }
        />
      </Switch>
    );
  }
}

export default Collection;
