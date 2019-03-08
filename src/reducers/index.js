import { combineReducers } from "redux";
import collection from "./collection";
import collectionArtistSearch from "./collectionArtistSearch";
import release from "./release";
import artist from "./artist";
import visitedReleases from "./visitedReleases";

export default combineReducers({
  collection,
  collectionArtistSearch,
  release,
  artist,
  visitedReleases
});
