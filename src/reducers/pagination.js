import { ActionTypes } from "../actions";

const pagination = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
      const collectionId = action.response.result;
      const collection = action.response.entities.collection[collectionId];
      const paginationId = collection.pagination;
      return action.response.entities.pagination[paginationId];
    default:
      return state;
  }
};

export default pagination;

export const getPagination = state => {
  return state;
};
