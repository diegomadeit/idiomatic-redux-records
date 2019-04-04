import React from "react";
import PropTypes from "prop-types";
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

RecordSearch.propTypes = {
  searchArtist: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RecordSearch;
