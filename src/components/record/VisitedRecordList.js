import React from "react";
import VisitedRecordThumbnail from "./VisitedRecordThumbnail";
import styles from "./VisitedRecordList.module.css";

const VisitedRecordList = ({ visitedReleases }) => (
  <>
    <h2>Recently visited records</h2>
    {!!visitedReleases.length ? (
      <div className={styles.records}>
        {/* {releases.map(release => (
          <VisitedRecordThumbnail key={release.id} {...release} />
        ))}*/}
        <ul>
          {visitedReleases.map(visit => (
            <li key={visit}>{visit}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p>No record visited.</p>
    )}
  </>
);
export default VisitedRecordList;
