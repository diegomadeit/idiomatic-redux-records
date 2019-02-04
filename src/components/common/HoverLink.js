import React, { Component } from "react";
import { Link } from "react-router-dom";

class HoverLink extends Component {
  state = { hovering: false };

  mouseOver = () => this.setState({ hovering: true });
  mouseOut = () => this.setState({ hovering: false });

  render() {
    const { to, children, hoverClass, className = "" } = this.props;
    const { hovering } = this.state;

    return (
      <div
        className={`${className} ${hovering ? hoverClass : ""}`}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <Link to={to}>{children}</Link>
      </div>
    );
  }
}
export default HoverLink;
