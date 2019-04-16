import { ActionTypes, NormalizedEntities } from "../actions";

const artist = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
      const artistId = action.response.result[NormalizedEntities.ARTIST];
      return action.response.entities.item[artistId];
    default:
      return state;
  }
};

export default artist;

export const getArtist = state => {
  return state;
};
