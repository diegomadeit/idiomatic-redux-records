import * as api from "../data/api/records";

export const ActionTypes = {
  SEARCH_ARTIST: "SEARCH_ARTIST",
  VISIT_RELEASE: "VISIT_RELEASE",
  FETCH_COLLECTION_REQUEST: "FETCH_COLLECTION_REQUEST",
  FETCH_COLLECTION_SUCCESS: "FETCH_COLLECTION_SUCCESS",
  FETCH_COLLECTION_FAILURE: "FETCH_COLLECTION_FAILURE"
};

export const searchArtist = artist => ({
  type: ActionTypes.SEARCH_ARTIST,
  artist
});

export const visitRelease = release => ({
  type: ActionTypes.VISIT_RELEASE,
  release
});

export const fetchCollection = () => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.FETCH_COLLECTION_REQUEST
  });

  return api.fetchRecords().then(
    collection => {
      dispatch({
        type: ActionTypes.FETCH_COLLECTION_SUCCESS,
        pagination: collection.pagination,
        releases: collection.releases
      });
    },
    error => {
      dispatch({
        type: ActionTypes.FETCH_COLLECTION_FAILURE,
        message: error.message || "Something went wrong."
      });
    }
  );
};
