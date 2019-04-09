import visitedReleases from "./visitedReleases";
import { ActionTypes } from "../actions";

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
});
