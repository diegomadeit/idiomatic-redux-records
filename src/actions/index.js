export const ActionTypes = {
  SEARCH_ARTIST: "SEARCH_ARTIST",
  VISIT_RELEASE: "VISIT_RELEASE",
  RECEIVE_COLLECTION: "RECEIVE_COLLECTION"
};

export const searchArtist = artist => ({
  type: ActionTypes.SEARCH_ARTIST,
  artist
});

export const visitRelease = releaseId => ({
  type: ActionTypes.VISIT_RELEASE,
  releaseId
});

export const receiveCollection = collection => ({
  type: ActionTypes.RECEIVE_COLLECTION,
  pagination: collection.pagination,
  releases: collection.releases
});
