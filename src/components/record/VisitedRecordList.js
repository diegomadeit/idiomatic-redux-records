import React from "react";
import PropTypes from "prop-types";
import VisitedRecordThumbnail from "./VisitedRecordThumbnail";
import styles from "./VisitedRecordList.module.css";

const VisitedRecordList = ({ visitedReleases }) => (
  <div className="row">
    <h2>Recently visited records</h2>
    {!!visitedReleases.length ? (
      <div className={styles.records}>
        {visitedReleases.map(release => (
          <VisitedRecordThumbnail key={release.id} release={release} />
        ))}
      </div>
    ) : (
      <p>No record visited.</p>
    )}
  </div>
);

VisitedRecordList.propTypes = {
  visitedReleases: PropTypes.array.isRequired
};

export default VisitedRecordList;
