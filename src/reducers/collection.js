import { combineReducers } from "redux";
import pagination, * as paginationSelectors from "./pagination";
import releases, * as releasesSelectors from "./releases";
import { ActionTypes } from "../actions";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_COLLECTION:
      return true;
    case ActionTypes.RECEIVE_COLLECTION:
      return false;
    default:
      return state;
  }
};

const collection = combineReducers({
  pagination,
  releases,
  isFetching
});

export default collection;

export const getVisibleReleases = (state, sorter, searchArtist) =>
  releasesSelectors.getVisibleReleases(state.releases, sorter, searchArtist);

export const getPagination = state =>
  paginationSelectors.getPagination(state.pagination);

export const getIsFetching = state => state.isFetching;
