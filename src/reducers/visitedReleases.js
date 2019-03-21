import { ActionTypes } from "../actions";

const findReleaseIndex = (state, releaseId) =>
  state.findIndex(release => release.id === releaseId);

const visitedReleases = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS:
      const releaseIndex = findReleaseIndex(state, action.release.id);

      return releaseIndex === -1
        ? [action.release, ...state]
        : [
            action.release,
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
