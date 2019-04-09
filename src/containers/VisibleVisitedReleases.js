import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVisitedReleases } from "../reducers";
import { createSelector } from "reselect";
import VisitedRecordList from "../components/record/VisitedRecordList";

const visitedReleasesSelector = createSelector(
  state => getVisitedReleases(state),
  visitedReleases => visitedReleases
);

const mapStateToProps = state => ({
  visitedReleases: visitedReleasesSelector(state)
});

const VisibleVisitedReleases = connect(mapStateToProps)(VisitedRecordList);

VisibleVisitedReleases.propTypes = {
  visitedReleases: PropTypes.array
};

export default VisibleVisitedReleases;
