import React from "react";
import logo from "../../logo.svg";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <img src={logo} className={styles.loader__img} alt="loading" />
  </div>
);

export default Loader;
