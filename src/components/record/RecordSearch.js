import React from "react";
import styles from "./RecordSearch.module.css";

const RecordSearch = ({ searchArtist, onSubmit, onChange }) => (
  <form onSubmit={event => onSubmit(event)}>
    <input
      className={styles.input}
      onChange={event => onChange(event.target.value)}
      placeholder="Search for an artist ..."
      value={searchArtist}
    />
  </form>
);

export default RecordSearch;
