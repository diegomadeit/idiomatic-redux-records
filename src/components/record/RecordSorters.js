import React from "react";
import CollectionSorter from "../../containers/CollectionSorter";
import { SortTypes } from "../../actions/sorting";
import styles from "./RecordSorters.module.css";

const RecordSorters = () => (
  <ul className={styles.sorters}>
    <li className={styles.sorters__type}>
      <CollectionSorter sortType={SortTypes.DEFAULT}>Default</CollectionSorter>
    </li>
    <li className={styles.sorters__type}>
      <CollectionSorter sortType={SortTypes.BY_ARTIST}>Artist</CollectionSorter>
    </li>
    <li className={styles.sorters__type}>
      <CollectionSorter sortType={SortTypes.BY_YEAR}>Year</CollectionSorter>
    </li>
  </ul>
);

export default RecordSorters;
