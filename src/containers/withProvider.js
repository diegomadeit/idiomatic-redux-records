import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";

export const withProvider = Wrapped => props => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Wrapped {...props} />
    </Provider>
  );
};

export default withProvider;
