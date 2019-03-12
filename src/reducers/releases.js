import { SortTypes } from "../utils/sorting";

const releases = (state = [], action) => state;

export default releases;

export const getVisibleReleases = (state, sorter, searchArtist) => {
  const artistReleases = getArtistReleases(state, searchArtist);
  return getSortedReleases(artistReleases, sorter);
};

const getArtistReleases = (releases, searchArtist) => {
  return searchArtist ? searchArtistReleases(releases, searchArtist) : releases;
};

const searchArtistReleases = (releases, searchArtist) =>
  releases.filter(
    release =>
      release.basic_information.artists[0].name
        .toUpperCase()
        .search(searchArtist.toUpperCase()) !== -1
  );

const getSortedReleases = (artistReleases, sorter) => {
  switch (sorter) {
    case SortTypes.BY_ARTIST:
      return artistReleases.sort((r1, r2) => compareReleaseArtist(r1, r2));
    case SortTypes.BY_YEAR:
      return artistReleases.sort((r1, r2) => compareReleaseYear(r1, r2));
    default:
      return artistReleases;
  }
};

const compareReleaseArtist = (release1, release2) =>
  release1.basic_information.artists[0].name.localeCompare(
    release2.basic_information.artists[0].name
  );

const compareReleaseYear = (release1, release2) =>
  release1.basic_information.year - release2.basic_information.year;
