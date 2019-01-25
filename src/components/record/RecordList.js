import React from "react";
import RecordThumbnail from "./RecordThumbnail";
import styles from "./RecordList.module.css";

const RecordList = ({ releases }) => (
  <section className={styles.records}>
    {releases &&
      releases.map(release => (
        <RecordThumbnail key={release.id} {...release} />
      ))}
  </section>
);
export default RecordList;
