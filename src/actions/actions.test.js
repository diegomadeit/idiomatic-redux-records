import {
  ActionTypes,
  searchArtist,
  fetchCollection,
  fetchCollectionItem
} from ".";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

describe("actions", () => {
  describe("action creators", () => {
    it("should create searchArtist action", () => {
      const artist = "Pink Floyd";
      const expectedAction = {
        type: ActionTypes.SEARCH_ARTIST,
        artist
      };
      expect(searchArtist(artist)).toEqual(expectedAction);
    });
  });

  describe("async actions", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    let store;

    afterEach(() => {
      fetchMock.restore();
    });

    it("should dispatch FETCH_COLLECTION_SUCCESS when fetching collection", async () => {
      fetchMock.getOnce("end:/releases", {
        body: { pagination: {}, releases: [] },
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        {
          type: ActionTypes.FETCH_COLLECTION_REQUEST
        },
        {
          type: ActionTypes.FETCH_COLLECTION_SUCCESS,
          pagination: {},
          releases: []
        }
      ];

      store = mockStore({ collection: {} });

      await store.dispatch(fetchCollection());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it("should dispatch FETCH_COLLECTION_ITEM_SUCCESS when fetching collection item", async () => {
      fetchMock.get(/(releases|artists)\/\d+/, {
        body: {},
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        {
          type: ActionTypes.FETCH_COLLECTION_ITEM_REQUEST
        },
        {
          type: ActionTypes.FETCH_COLLECTION_ITEM_SUCCESS,
          artist: {},
          release: {}
        }
      ];

      store = mockStore({ collectionItem: {} });

      const params = { artistId: "8699", recordId: "3208548" };
      await store.dispatch(
        fetchCollectionItem(params.artistId, params.recordId)
      );

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
