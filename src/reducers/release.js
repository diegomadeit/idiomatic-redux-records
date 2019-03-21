import { ActionTypes } from "../actions";

const release = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
      return action.release;
    default:
      return state;
  }
};

export default release;

export const getRelease = state => {
  return state;
};
