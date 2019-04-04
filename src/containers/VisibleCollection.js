import React, { Component } from "react";
import PropTypes from "prop-types";
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
import { SortTypes } from "../utils/sorting";

class VisibleCollection extends Component {
  generateParameters = location => {
    const sortType = location.pathname.includes(SortTypes.BY_YEAR)
      ? SortTypes.BY_YEAR
      : SortTypes.BY_ARTIST;
    const params = new URLSearchParams(location.search);

    return params.has("page")
      ? { query: { page: params.get("page"), sort: sortType } }
      : { query: { sort: sortType } };
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
    const shouldFetch = this.props.location !== prevProps.location;
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

VisibleCollection.propTypes = {
  pagination: PropTypes.object.isRequired,
  releases: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  fetchCollection: PropTypes.func.isRequired,
  visitedReleases: PropTypes.array.isRequired,
  collectionPath: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

const getCollectionPath = match =>
  `${match.params.sortType ? `/records/${match.params.sortType}` : "/records"}`;

const mapStateToProps = (state, { match }) => ({
  pagination: getCollectionPagination(state),
  releases: getCollectionVisibleReleases(state),
  isFetching: isCollectionFetching(state),
  errorMessage: getCollectionErrorMessage(state),
  visitedReleases: getVisitedReleases(state),
  collectionPath: getCollectionPath(match)
});

VisibleCollection = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleCollection)
);

export default VisibleCollection;
