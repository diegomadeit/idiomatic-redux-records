import React from "react";
import RecordThumbnail from "./RecordThumbnail";
import styles from "./RecordList.module.css";

const RecordList = ({ releases }) => {
  return !!releases.length ? (
    <div className={styles.records}>
      {releases.map(release => (
        <RecordThumbnail key={release.id} {...release} />
      ))}
    </div>
  ) : (
    <p>Artist not found in the collection.</p>
  );
};
export default RecordList;
