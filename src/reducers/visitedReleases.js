import { ActionTypes } from "../actions";

const findVisitedIndex = (visitedReleases, releaseId) =>
  visitedReleases.findIndex(visited => visited === releaseId);

const visitedReleases = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.VISIT_RELEASE:
      const visitedIndex = findVisitedIndex(state, action.releaseId);

      return visitedIndex === -1
        ? [action.releaseId, ...state]
        : [
            action.releaseId,
            ...state.slice(0, visitedIndex),
            ...state.slice(visitedIndex + 1, state.length)
          ];

    default:
      return state;
  }
};

export default visitedReleases;

export const getVisitedReleases = state => {
  return state;
};
