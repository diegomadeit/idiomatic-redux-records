import { combineReducers } from "redux";
import pagination, * as paginationSelectors from "./pagination";
import releases, * as releasesSelectors from "./releases";
import { ActionTypes } from "../actions";

const fetching = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_REQUEST:
      return true;
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
    case ActionTypes.FETCH_COLLECTION_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_FAILURE:
      return action.message;
    case ActionTypes.FETCH_COLLECTION_REQUEST:
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
      return null;
    default:
      return state;
  }
};

const collection = combineReducers({
  pagination,
  releases,
  fetching,
  errorMessage
});

export default collection;

export const getVisibleReleases = (state, searchArtist) =>
  releasesSelectors.getVisibleReleases(state.releases, searchArtist);

export const getPagination = state =>
  paginationSelectors.getPagination(state.pagination);

export const isFetching = state => state.fetching;

export const getErrorMessage = state => state.errorMessage;
