import { createStore } from "redux";
import rootReducer from "./reducers";
import sampleCollection from "./data/local/sampleCollection";
import sampleRelease from "./data/local/sampleRelease";
import sampleArtist from "./data/local/sampleArtist";
import { loadLocalState, saveLocalState } from "./localStorage";
import throttle from "lodash/throttle";

const configureStore = () => {
  const localState = loadLocalState();

  const persistedState = {
    ...localState,
    collection: sampleCollection,
    release: sampleRelease,
    artist: sampleArtist
  };

  const store = createStore(rootReducer, persistedState);

  store.subscribe(
    throttle(() => {
      saveLocalState({
        visitedReleases: store.getState().visitedReleases
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
