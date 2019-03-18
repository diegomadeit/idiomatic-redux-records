import { ActionTypes } from "../actions";

const pagination = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
      return action.pagination;
    default:
      return state;
  }
};

export default pagination;

export const getPagination = state => {
  return state;
};
