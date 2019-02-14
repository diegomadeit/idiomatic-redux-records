import { combineReducers } from "redux";
import collection from "./collection";
import collectionSorter from "./collectionSorter";
import collectionArtistSearch from "./collectionArtistSearch";
import release from "./release";
import artist from "./artist";

export default combineReducers({
  collection,
  collectionSorter,
  collectionArtistSearch,
  release,
  artist
});
