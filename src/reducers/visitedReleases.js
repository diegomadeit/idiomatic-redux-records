import { ActionTypes, NormalizedEntities } from "../actions";

const findReleaseIndex = (state, releaseId) =>
  state.findIndex(release => release.id === releaseId);

const visitedReleases = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
      const releaseId = action.response.result[NormalizedEntities.RELEASE];
      const releaseIndex = findReleaseIndex(state, releaseId);

      return releaseIndex === -1
        ? [action.response.entities.item[releaseId], ...state]
        : [
            action.response.entities.item[releaseId],
            ...state.slice(0, releaseIndex),
            ...state.slice(releaseIndex + 1, state.length)
          ];

    default:
      return state;
  }
};

export default visitedReleases;

export const getVisitedReleases = state => {
  return state;
};
