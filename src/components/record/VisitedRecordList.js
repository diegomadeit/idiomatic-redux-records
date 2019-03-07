import React from "react";
import VisitedRecordThumbnail from "./VisitedRecordThumbnail";
import styles from "./VisitedRecordList.module.css";

const VisitedRecordList = ({ releases }) => (
  <>
    <h2>Recently visited records</h2>
    {!!releases.length ? (
      <div className={styles.records}>
        {releases.map(release => (
          <VisitedRecordThumbnail key={release.id} {...release} />
        ))}
      </div>
    ) : (
      <p>No record visited.</p>
    )}
  </>
);
export default VisitedRecordList;
