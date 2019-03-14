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
  getVisitedReleases
} from "../reducers";
import { fetchRecords } from "../data/api/records";

class VisibleCollection extends Component {
  componentDidMount() {
    const { receiveCollection } = this.props;

    fetchRecords().then(collection => {
      receiveCollection(collection);
    });
  }

  render() {
    const { visitRelease, ...rest } = this.props;
    return <Collection {...rest} addToVisited={visitRelease} />;
  }
}

const mapStateToProps = (state, { match }) => ({
  pagination: getPagination(state),
  releases: getVisibleReleases(state, match.params.sortType),
  release: getRelease(state),
  artist: getArtist(state),
  visitedReleases: getVisitedReleases(state)
});

VisibleCollection = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleCollection)
);

export default VisibleCollection;
