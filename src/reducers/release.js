import { ActionTypes, NormalizedEntities } from "../actions";

const release = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
      const releaseId = action.response.result[NormalizedEntities.RELEASE];
      return action.response.entities.item[releaseId];
    default:
      return state;
  }
};

export default release;

export const getRelease = state => {
  return state;
};
