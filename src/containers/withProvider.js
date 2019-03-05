import React from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";

export const withProvider = Wrapped => props => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Wrapped {...props} />
    </Provider>
  );
};

export default withProvider;
