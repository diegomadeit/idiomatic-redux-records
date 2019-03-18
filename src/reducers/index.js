import { combineReducers } from "redux";
import collection, * as collectionSelectors from "./collection";
import collectionArtistSearch, * as collectionArtistSearchSelectors from "./collectionArtistSearch";
import release, * as releaseSelectors from "./release";
import artist, * as artistSelectors from "./artist";
import visitedReleases, * as visitedReleasesSelectors from "./visitedReleases";

export default combineReducers({
  collection,
  collectionArtistSearch,
  release,
  artist,
  visitedReleases
});

export const getVisibleReleases = (state, sorter) =>
  collectionSelectors.getVisibleReleases(
    state.collection,
    sorter,
    state.collectionArtistSearch
  );

export const getPagination = state =>
  collectionSelectors.getPagination(state.collection);

export const getIsFetching = state =>
  collectionSelectors.getIsFetching(state.collection);

export const getErrorMessageFetch = state =>
  collectionSelectors.getErrorMessageFetch(state.collection);

export const getRelease = state => releaseSelectors.getRelease(state.release);

export const getArtist = state => artistSelectors.getArtist(state.artist);

export const getVisitedReleases = state =>
  visitedReleasesSelectors.getVisitedReleases(state.visitedReleases);

export const getCollectionArtistSearch = state =>
  collectionArtistSearchSelectors.getCollectionArtistSearch(
    state.collectionArtistSearch
  );
