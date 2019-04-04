import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch record collection: {message}</p>
    <Button onClick={onRetry}>Retry</Button>
  </div>
);

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired
};

export default FetchError;
