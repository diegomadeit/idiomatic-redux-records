import { ActionTypes } from "../actions";

const pagination = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_COLLECTION:
      return action.pagination;
    default:
      return state;
  }
};

export default pagination;

export const getPagination = state => {
  return state;
};
