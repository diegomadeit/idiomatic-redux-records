import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { loadLocalState, saveLocalState } from "./localStorage";
import throttle from "lodash/throttle";
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = () => {
  const persistedState = loadLocalState();

  const middlewares = [thunk];
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
