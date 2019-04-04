import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ disabled, children, onClick }) => (
  <button onClick={onClick} disabled={disabled} className={styles.button}>
    {children}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
