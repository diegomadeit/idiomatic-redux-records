import { combineReducers } from "redux";
import pagination, * as paginationSelectors from "./pagination";
import releases, * as releasesSelectors from "./releases";
import { ActionTypes } from "../actions";

const isFetching = (state = false, action) => {
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

const errorMessageFetch = (state = null, action) => {
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
  isFetching,
  errorMessageFetch
});

export default collection;

export const getVisibleReleases = (state, sorter, searchArtist) =>
  releasesSelectors.getVisibleReleases(state.releases, sorter, searchArtist);

export const getPagination = state =>
  paginationSelectors.getPagination(state.pagination);

export const getIsFetching = state => state.isFetching;

export const getErrorMessageFetch = state => state.errorMessageFetch;
