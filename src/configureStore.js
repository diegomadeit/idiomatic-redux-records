import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import sampleRelease from "./data/local/sampleRelease";
import sampleArtist from "./data/local/sampleArtist";
import { loadLocalState, saveLocalState } from "./localStorage";
import throttle from "lodash/throttle";
import logger from "redux-logger";

const configureStore = () => {
  const localState = loadLocalState();

  const persistedState = {
    ...localState,
    release: sampleRelease,
    artist: sampleArtist
  };

  const middlewares = [];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );

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
