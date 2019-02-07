import { combineReducers } from "redux";
import collection from "./collection";
import collectionSorter from "./collectionSorter";

export default combineReducers({
  collection,
  collectionSorter
});
