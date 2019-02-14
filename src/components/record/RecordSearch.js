import React from "react";
import styles from "./RecordSearch.module.css";

const RecordSearch = ({ onSubmit, onChange }) => (
  <form onSubmit={event => onSubmit(event)}>
    <input
      className={styles.input}
      onChange={event => onChange(event.target.value)}
      placeholder="Search for an artist ..."
    />
  </form>
);

export default RecordSearch;
