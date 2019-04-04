import React from "react";
import PropTypes from "prop-types";
import RecordThumbnail from "./RecordThumbnail";
import styles from "./RecordList.module.css";

const RecordList = ({ releases }) =>
  !!releases.length ? (
    <div className={styles.records}>
      {releases.map(release => (
        <RecordThumbnail key={release.id} {...release} />
      ))}
    </div>
  ) : (
    <p>Artist not found in the collection.</p>
  );

RecordList.propTypes = {
  releases: PropTypes.array.isRequired
};

export default RecordList;
