import { ActionTypes } from "../actions";

const artist = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
      return action.artist;
    default:
      return state;
  }
};

export default artist;

export const getArtist = state => {
  return state;
};
