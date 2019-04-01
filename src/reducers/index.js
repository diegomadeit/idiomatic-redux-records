import { combineReducers } from "redux";
import collection, * as collectionSelectors from "./collection";
import collectionItem, * as collectionItemSelectors from "./collectionItem";
import collectionArtistSearch, * as collectionArtistSearchSelectors from "./collectionArtistSearch";
import visitedReleases, * as visitedReleasesSelectors from "./visitedReleases";

export default combineReducers({
  collection,
  collectionItem,
  collectionArtistSearch,
  visitedReleases
});

export const getCollectionPagination = state =>
  collectionSelectors.getPagination(state.collection);

export const getCollectionVisibleReleases = state =>
  collectionSelectors.getVisibleReleases(
    state.collection,
    state.collectionArtistSearch
  );

export const isCollectionFetching = state =>
  collectionSelectors.isFetching(state.collection);

export const getCollectionErrorMessage = state =>
  collectionSelectors.getErrorMessage(state.collection);

export const getCollectionItemArtist = state =>
  collectionItemSelectors.getArtist(state.collectionItem);

export const getCollectionItemRelease = state =>
  collectionItemSelectors.getRelease(state.collectionItem);

export const isCollectionItemFetching = state =>
  collectionItemSelectors.isFetching(state.collectionItem);

export const getCollectionItemErrorMessage = state =>
  collectionItemSelectors.getErrorMessage(state.collectionItem);

export const getVisitedReleases = state =>
  visitedReleasesSelectors.getVisitedReleases(state.visitedReleases);

export const getCollectionArtistSearch = state =>
  collectionArtistSearchSelectors.getCollectionArtistSearch(
    state.collectionArtistSearch
  );
