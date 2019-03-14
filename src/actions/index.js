export const ActionTypes = {
  SEARCH_ARTIST: "SEARCH_ARTIST",
  VISIT_RELEASE: "VISIT_RELEASE"
};

export const searchArtist = artist => ({
  type: ActionTypes.SEARCH_ARTIST,
  artist
});

export const visitRelease = releaseId => ({
  type: ActionTypes.VISIT_RELEASE,
  releaseId
});
