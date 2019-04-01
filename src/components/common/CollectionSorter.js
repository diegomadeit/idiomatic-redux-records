import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CollectionSorter.module.css";
import { SortTypes } from "../../utils/sorting";

const CollectionSorter = ({ sortType, children }) => (
  <NavLink
    className={styles.link}
    activeClassName={styles["link--active"]}
    exact={true}
    to={sortType === SortTypes.BY_ARTIST ? "/records" : `/records/${sortType}`}
  >
    {children}
  </NavLink>
);

export default CollectionSorter;
