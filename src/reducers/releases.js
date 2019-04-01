import { ActionTypes } from "../actions";

const releases = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COLLECTION_SUCCESS:
      return action.releases;
    default:
      return state;
  }
};

export default releases;

export const getVisibleReleases = (state, searchArtist) =>
  searchArtist ? searchArtistReleases(state, searchArtist) : state;

const searchArtistReleases = (releases, searchArtist) =>
  releases.filter(
    release =>
      release.basic_information.artists[0].name
        .toUpperCase()
        .search(searchArtist.toUpperCase()) !== -1
  );
