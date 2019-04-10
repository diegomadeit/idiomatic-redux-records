import PropTypes from "prop-types";
import { connect } from "react-redux";
import { visitedReleasesSelector } from "../reducers";
import VisitedRecordList from "../components/record/VisitedRecordList";

const mapStateToProps = state => ({
  visitedReleases: visitedReleasesSelector(state)
});

const VisibleVisitedReleases = connect(mapStateToProps)(VisitedRecordList);

VisibleVisitedReleases.propTypes = {
  visitedReleases: PropTypes.array
};

export default VisibleVisitedReleases;
