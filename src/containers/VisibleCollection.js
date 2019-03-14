import { connect } from "react-redux";
import Collection from "../views/collection/Collection";
import { visitRelease } from "../actions";
import { withRouter } from "react-router";
import {
  getPagination,
  getVisibleReleases,
  getRelease,
  getArtist,
  getVisitedReleases
} from "../reducers";

const mapStateToProps = (state, { match }) => ({
  pagination: getPagination(state),
  releases: getVisibleReleases(state, match.params.sortType),
  release: getRelease(state),
  artist: getArtist(state),
  visitedReleases: getVisitedReleases(state)
});

const mapDispatchToProps = dispatch => ({
  addToVisited: releaseId => dispatch(visitRelease(releaseId))
});

const VisibleCollection = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Collection)
);

export default VisibleCollection;
