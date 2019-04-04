import React from "react";
import PropTypes from "prop-types";
import VisitedRecordThumbnail from "./VisitedRecordThumbnail";
import styles from "./VisitedRecordList.module.css";

const VisitedRecordList = ({ visitedReleases }) => (
  <>
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
  </>
);

VisitedRecordList.propTypes = {
  visitedReleases: PropTypes.array.isRequired
};

export default VisitedRecordList;
