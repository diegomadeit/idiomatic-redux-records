import { ActionTypes } from "../actions";
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
      return action.response.entities.releases;
    default:
      return state;
  }
};

const idList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
      const collectionId = action.response.result;
      const collection = action.response.entities.collection[collectionId];
      return collection.releases;
    default:
      return state;
  }
};

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

const releases = combineReducers({
  byId,
  idList,
  fetching,
  errorMessage
});

export default releases;

export const getVisibleReleases = (state, searchArtist) => {
  const releases = getAllReleases(state.byId, state.idList);
  return searchArtist ? searchArtistReleases(releases, searchArtist) : releases;
};

export const isFetching = state => state.fetching;

export const getErrorMessage = state => state.errorMessage;

const getAllReleases = (byId, idList) => idList.map(id => byId[id]);

const searchArtistReleases = (releases, searchArtist) =>
  releases.filter(
    release =>
      release.basic_information.artists[0].name
        .toUpperCase()
        .search(searchArtist.toUpperCase()) !== -1
  );
