import * as api from "../data/api/records";

export const ActionTypes = {
  SEARCH_ARTIST: "SEARCH_ARTIST",
  FETCH_COLLECTION_REQUEST: "FETCH_COLLECTION_REQUEST",
  FETCH_COLLECTION_SUCCESS: "FETCH_COLLECTION_SUCCESS",
  FETCH_COLLECTION_FAILURE: "FETCH_COLLECTION_FAILURE",
  FETCH_COLLECTION_ITEM_REQUEST: "FETCH_COLLECTION_ITEM_REQUEST",
  FETCH_COLLECTION_ITEM_SUCCESS: "FETCH_COLLECTION_ITEM_SUCCESS",
  FETCH_COLLECTION_ITEM_FAILURE: "FETCH_COLLECTION_ITEM_FAILURE"
};

export const searchArtist = artist => ({
  type: ActionTypes.SEARCH_ARTIST,
  artist
});

export const fetchCollection = opts => async dispatch => {
  dispatch({
    type: ActionTypes.FETCH_COLLECTION_REQUEST
  });

  try {
    const collection = await api.fetchRecords(opts);
    dispatch({
      type: ActionTypes.FETCH_COLLECTION_SUCCESS,
      pagination: collection.pagination,
      releases: collection.releases
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_COLLECTION_FAILURE,
      message: error.message || "Something went wrong."
    });
  }
};

export const fetchCollectionItem = (artistId, recordId) => async dispatch => {
  dispatch({
    type: ActionTypes.FETCH_COLLECTION_ITEM_REQUEST
  });

  try {
    const [artist, release] = await Promise.all([
      api.fetchArtist(artistId),
      api.fetchRecord(recordId)
    ]);

    dispatch({
      type: ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
      artist,
      release
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_COLLECTION_ITEM_FAILURE,
      message: error.message || "Something went wrong."
    });
  }
};
