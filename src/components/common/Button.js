import React from "react";
import styles from "./Button.module.css";

const Button = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active} className={styles.button}>
    {children}
  </button>
);

export default Button;
