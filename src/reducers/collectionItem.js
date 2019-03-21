import { combineReducers } from "redux";
import release, * as releaseSelectors from "./release";
import artist, * as artistSelectors from "./artist";
import { ActionTypes } from "../actions";

const fetching = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_REQUEST:
      return true;
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
    case ActionTypes.FETCH_COLLECTION_ITEM_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_FAILURE:
      return action.message;
    case ActionTypes.FETCH_COLLECTION_ITEM_REQUEST:
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
      return null;
    default:
      return state;
  }
};

const collectionItem = combineReducers({
  artist,
  release,
  fetching,
  errorMessage
});

export default collectionItem;

export const getArtist = state => artistSelectors.getArtist(state.artist);

export const getRelease = state => releaseSelectors.getRelease(state.release);

export const isFetching = state => state.fetching;

export const getErrorMessage = state => state.errorMessage;
