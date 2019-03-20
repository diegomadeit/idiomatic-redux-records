import React from "react";
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
export default VisitedRecordList;
