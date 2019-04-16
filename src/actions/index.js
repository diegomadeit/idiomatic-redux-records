import * as api from "../data/api/records";
import { normalize } from "normalizr";
import * as schema from "./schema";

export const ActionTypes = {
  SEARCH_ARTIST: "SEARCH_ARTIST",
  FETCH_COLLECTION_REQUEST: "FETCH_COLLECTION_REQUEST",
  FETCH_COLLECTION_SUCCESS: "FETCH_COLLECTION_SUCCESS",
  FETCH_COLLECTION_FAILURE: "FETCH_COLLECTION_FAILURE",
  FETCH_COLLECTION_ITEM_REQUEST: "FETCH_COLLECTION_ITEM_REQUEST",
  FETCH_COLLECTION_ITEM_SUCCESS: "FETCH_COLLECTION_ITEM_SUCCESS",
  FETCH_COLLECTION_ITEM_FAILURE: "FETCH_COLLECTION_ITEM_FAILURE"
};

export const NormalizedEntities = {
  ARTIST: "artist",
  RELEASE: "release"
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
      response: normalize(collection, schema.collection)
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
      response: normalize({ artist, release }, schema.collectionItemValues)
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_COLLECTION_ITEM_FAILURE,
      message: error.message || "Something went wrong."
    });
  }
};
