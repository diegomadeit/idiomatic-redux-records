import { combineReducers } from "redux";
import pagination, * as paginationSelectors from "./pagination";
import releases, * as releasesSelectors from "./releases";

const collection = combineReducers({
  pagination,
  releases
});

export default collection;

export const getPagination = state =>
  paginationSelectors.getPagination(state.pagination);

export const getVisibleReleases = (state, searchArtist) =>
  releasesSelectors.getVisibleReleases(state.releases, searchArtist);

export const isFetching = state => releasesSelectors.isFetching(state.releases);

export const getErrorMessage = state =>
  releasesSelectors.getErrorMessage(state.releases);
