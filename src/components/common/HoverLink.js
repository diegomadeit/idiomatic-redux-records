import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./HoverLink.module.css";

class HoverLink extends Component {
  state = { hovering: false };

  mouseOver = () => this.setState({ hovering: true });
  mouseOut = () => this.setState({ hovering: false });

  render() {
    const { to, children, hoverClass } = this.props;
    const { hovering } = this.state;

    return (
      <div
        className={`${styles.link} ${hovering ? hoverClass : ""}`}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <Link to={to}>{children}</Link>
      </div>
    );
  }
}
export default HoverLink;
