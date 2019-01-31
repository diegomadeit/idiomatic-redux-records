import React from "react";
import logo from "../../logo.svg";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <img src={logo} className={styles.header__img} alt="logo" />
    <h1 className={styles.header__heading}>react records</h1>
  </header>
);

export default Header;
