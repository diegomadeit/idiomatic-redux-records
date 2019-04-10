import visitedReleases from "./visitedReleases";
import { ActionTypes } from "../actions";
import { visitedReleasesSelector } from ".";

describe("visitedReleases reducer", () => {
  it("should return the initial state", () => {
    expect(visitedReleases(undefined, {})).toEqual([]);
  });

  it("should handle FETCH_COLLECTION_ITEM_SUCCESS", () => {
    expect(
      visitedReleases([], {
        type: ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
        release: { id: 1 }
      })
    ).toEqual([{ id: 1 }]);

    expect(
      visitedReleases([{ id: 1 }], {
        type: ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
        release: { id: 2 }
      })
    ).toEqual([{ id: 2 }, { id: 1 }]);

    expect(
      visitedReleases([{ id: 2 }, { id: 1 }], {
        type: ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
        release: { id: 1 }
      })
    ).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("should visitedReleasesSelector memoization work correctly", () => {
    const withMockState = reducer => (...args) => ({
      visitedReleases: reducer(...args)
    });

    const getMockState = withMockState(visitedReleases);

    let state = getMockState([], {
      type: ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
      release: { id: 1 }
    });
    expect(visitedReleasesSelector(state)).toEqual([{ id: 1 }]);

    state = getMockState(state.visitedReleases, {
      type: ActionTypes.FETCH_COLLECTION_SUCCESS
    });
    expect(visitedReleasesSelector(state)).toEqual([{ id: 1 }]);
    expect(visitedReleasesSelector.recomputations()).toBe(1);

    state = getMockState(state.visitedReleases, {
      type: ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
      release: { id: 2 }
    });
    expect(visitedReleasesSelector(state)).toEqual([{ id: 2 }, { id: 1 }]);
    expect(visitedReleasesSelector.recomputations()).toBe(2);
  });
});
