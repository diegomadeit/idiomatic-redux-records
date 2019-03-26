import React, { Component } from "react";
import { connect } from "react-redux";
import Collection from "../views/collection/Collection";
import * as actions from "../actions";
import { withRouter } from "react-router";
import {
  getCollectionPagination,
  getCollectionVisibleReleases,
  isCollectionFetching,
  getCollectionErrorMessage,
  getVisitedReleases
} from "../reducers";
import Loader from "../components/common/Loader";
import FetchError from "../components/common/FetchError";

class VisibleCollection extends Component {
  generateParameters = location => {
    const params = new URLSearchParams(location.search);
    return params.has("page") ? { query: { page: params.get("page") } } : {};
  };

  fetchCollectionData = (shouldFetch = true) => {
    if (shouldFetch) {
      const { fetchCollection, location } = this.props;
      const parameters = this.generateParameters(location);
      fetchCollection(parameters);
    }
  };

  componentDidMount() {
    this.fetchCollectionData();
  }

  componentDidUpdate(prevProps) {
    const shouldFetch =
      this.props.location.search !== prevProps.location.search;
    this.fetchCollectionData(shouldFetch);
  }

  render() {
    const {
      pagination,
      releases,
      isFetching,
      errorMessage,
      fetchCollection,
      visitedReleases,
      collectionPath
    } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (errorMessage) {
      return <FetchError message={errorMessage} onRetry={fetchCollection} />;
    }

    return (
      <Collection
        pagination={pagination}
        releases={releases}
        visitedReleases={visitedReleases}
        collectionPath={collectionPath}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  pagination: getCollectionPagination(state),
  releases: getCollectionVisibleReleases(state, match.params.sortType),
  isFetching: isCollectionFetching(state),
  errorMessage: getCollectionErrorMessage(state),
  visitedReleases: getVisitedReleases(state),
  collectionPath: match.path
});

VisibleCollection = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleCollection)
);

export default VisibleCollection;
