import React from "react";
import CollectionSorter from "../common/CollectionSorter";
import CollectionSearch from "../../containers/CollectionSearch";
import { SortTypes } from "../../utils/sorting";
import styles from "./RecordActions.module.css";

const RecordActions = () => (
  <ul className={styles.actions}>
    <li className={styles.actions__sorter}>
      <CollectionSorter sortType={SortTypes.BY_ARTIST}>Artist</CollectionSorter>
    </li>
    <li className={styles.actions__sorter}>
      <CollectionSorter sortType={SortTypes.BY_YEAR}>Year</CollectionSorter>
    </li>
    <li className={styles.actions__search}>
      <CollectionSearch />
    </li>
  </ul>
);

export default RecordActions;
