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
  componentDidMount() {
    const { fetchCollection } = this.props;
    fetchCollection();
  }

  render() {
    const {
      releases,
      isFetching,
      errorMessage,
      fetchCollection,
      visitedReleases
    } = this.props;

    if (isFetching && !releases.length) {
      return <Loader />;
    }

    if (errorMessage && !releases.length) {
      return <FetchError message={errorMessage} onRetry={fetchCollection} />;
    }

    return <Collection releases={releases} visitedReleases={visitedReleases} />;
  }
}

const mapStateToProps = (state, { match }) => ({
  pagination: getCollectionPagination(state),
  releases: getCollectionVisibleReleases(state, match.params.sortType),
  isFetching: isCollectionFetching(state),
  errorMessage: getCollectionErrorMessage(state),
  visitedReleases: getVisitedReleases(state)
});

VisibleCollection = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleCollection)
);

export default VisibleCollection;
