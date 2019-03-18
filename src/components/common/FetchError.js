import React from "react";
import Button from "./Button";

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch record collection: {message}</p>
    <Button onClick={onRetry}>Retry</Button>
  </div>
);

export default FetchError;
