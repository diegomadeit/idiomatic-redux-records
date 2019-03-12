import { combineReducers } from "redux";
import pagination, * as paginationSelectors from "./pagination";
import releases, * as releasesSelectors from "./releases";

const collection = combineReducers({
  pagination,
  releases
});

export default collection;

export const getVisibleReleases = (state, sorter, searchArtist) =>
  releasesSelectors.getVisibleReleases(state.releases, sorter, searchArtist);

export const getPagination = state =>
  paginationSelectors.getPagination(state.pagination);
