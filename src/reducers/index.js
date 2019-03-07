import { combineReducers } from "redux";
import collection from "./collection";
import collectionArtistSearch from "./collectionArtistSearch";
import release from "./release";
import artist from "./artist";

export default combineReducers({
  collection,
  collectionArtistSearch,
  release,
  artist
});
