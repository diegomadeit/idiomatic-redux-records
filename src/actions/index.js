import * as api from "../data/api/records";

export const ActionTypes = {
  SEARCH_ARTIST: "SEARCH_ARTIST",
  VISIT_RELEASE: "VISIT_RELEASE",
  REQUEST_COLLECTION: "REQUEST_COLLECTION",
  RECEIVE_COLLECTION: "RECEIVE_COLLECTION"
};

export const searchArtist = artist => ({
  type: ActionTypes.SEARCH_ARTIST,
  artist
});

export const visitRelease = releaseId => ({
  type: ActionTypes.VISIT_RELEASE,
  releaseId
});

const requestCollection = () => ({
  type: ActionTypes.REQUEST_COLLECTION
});

const receiveCollection = collection => ({
  type: ActionTypes.RECEIVE_COLLECTION,
  pagination: collection.pagination,
  releases: collection.releases
});

export const fetchCollection = () => (dispatch, getState) => {
  dispatch(requestCollection());

  return api.fetchRecords().then(collection => {
    dispatch(receiveCollection(collection));
  });
};
