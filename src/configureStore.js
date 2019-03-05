import { createStore } from "redux";
import rootReducer from "./reducers";
import sampleCollection from "./data/local/sampleCollection";
import sampleRelease from "./data/local/sampleRelease";
import sampleArtist from "./data/local/sampleArtist";

const configureStore = () => {
  const persistedState = {
    collection: sampleCollection,
    release: sampleRelease,
    artist: sampleArtist
  };

  const store = createStore(rootReducer, persistedState);

  return store;
};

export default configureStore;
