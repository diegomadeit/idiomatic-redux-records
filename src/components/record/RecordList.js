import React from "react";
import RecordThumbnail from "./RecordThumbnail";
import styles from "./RecordList.module.css";

const RecordList = ({ releases }) => (
  <div className={styles.records}>
    {releases.map(release => (
      <RecordThumbnail key={release.id} {...release} />
    ))}
  </div>
);
export default RecordList;
