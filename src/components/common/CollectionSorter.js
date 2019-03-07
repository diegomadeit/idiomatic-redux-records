import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CollectionSorter.module.css";

const CollectionSorter = ({ sortType, children }) => (
  <NavLink
    className={styles.link}
    activeClassName={styles["link--active"]}
    to={`/records/sort/${sortType}`}
  >
    {children}
  </NavLink>
);

export default CollectionSorter;
