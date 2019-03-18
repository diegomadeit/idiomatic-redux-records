import React, { Component } from "react";
import { connect } from "react-redux";
import Collection from "../views/collection/Collection";
import * as actions from "../actions";
import { withRouter } from "react-router";
import {
  getPagination,
  getVisibleReleases,
  getRelease,
  getArtist,
  getVisitedReleases,
  getIsFetching,
  getErrorMessageFetch
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
      visitRelease,
      releases,
      isFetching,
      errorMessageFetch,
      fetchCollection,
      ...rest
    } = this.props;

    if (isFetching && !releases.lenght) {
      return <Loader />;
    }

    if (errorMessageFetch && !releases.lenght) {
      return (
        <FetchError message={errorMessageFetch} onRetry={fetchCollection} />
      );
    }

    return (
      <Collection {...rest} releases={releases} addToVisited={visitRelease} />
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  pagination: getPagination(state),
  releases: getVisibleReleases(state, match.params.sortType),
  release: getRelease(state),
  artist: getArtist(state),
  visitedReleases: getVisitedReleases(state),
  isFetching: getIsFetching(state),
  errorMessageFetch: getErrorMessageFetch(state)
});

VisibleCollection = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleCollection)
);

export default VisibleCollection;
