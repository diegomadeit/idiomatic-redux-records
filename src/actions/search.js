import { ActionTypes } from "./index";

export const searchArtist = artist => ({
  type: ActionTypes.SEARCH_ARTIST,
  artist
});
