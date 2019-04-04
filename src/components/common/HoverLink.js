import React, { Component } from "react";
import PropTypes from "prop-types";
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

HoverLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  hoverClass: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default HoverLink;
