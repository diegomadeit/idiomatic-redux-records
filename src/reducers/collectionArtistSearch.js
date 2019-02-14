import { ActionTypes } from "../actions";

const collectionArtistSearch = (state = "", action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_ARTIST:
      return action.artist;
    default:
      return state;
  }
};

export default collectionArtistSearch;
