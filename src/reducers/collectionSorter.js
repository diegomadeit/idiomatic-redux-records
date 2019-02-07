import { ActionTypes } from "../actions";
import { SortTypes } from "../actions/sorting";

const collectionSorter = (state = SortTypes.DEFAULT, action) => {
  switch (action.type) {
    case ActionTypes.SORT_COLLECTION:
      return action.sortType;
    default:
      return state;
  }
};

export default collectionSorter;
