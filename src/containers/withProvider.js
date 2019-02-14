import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";
import sampleCollection from "../data/local/sampleCollection";
import sampleRelease from "../data/local/sampleRelease";
import sampleArtist from "../data/local/sampleArtist";

const persistedState = {
  collection: sampleCollection,
  release: sampleRelease,
  artist: sampleArtist
};

export const withProvider = Wrapped => props => {
  const store = createStore(rootReducer, persistedState);

  return (
    <Provider store={store}>
      <Wrapped {...props} />
    </Provider>
  );
};

export default withProvider;
