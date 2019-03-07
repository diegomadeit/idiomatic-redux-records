import { connect } from "react-redux";
import Collection from "../views/collection/Collection";
import { SortTypes } from "../utils/sorting";

const compareReleaseArtist = (release1, release2) =>
  release1.basic_information.artists[0].name.localeCompare(
    release2.basic_information.artists[0].name
  );

const compareReleaseYear = (release1, release2) =>
  release1.basic_information.year - release2.basic_information.year;

const searchArtistReleases = (releases, searchArtist) =>
  releases.filter(
    release =>
      release.basic_information.artists[0].name
        .toUpperCase()
        .search(searchArtist.toUpperCase()) !== -1
  );

const getVisibleReleases = (releases, sorter, searchArtist) => {
  const artistReleases = getArtistReleases(releases, searchArtist);
  return getSortedReleases(artistReleases, sorter);
};

const getArtistReleases = (releases, searchArtist) => {
  return searchArtist
    ? searchArtistReleases(releases, searchArtist)
    : [...releases];
};

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

const mapStateToProps = (state, ownProps) => ({
  pagination: state.collection.pagination,
  releases: getVisibleReleases(
    state.collection.releases,
    ownProps.match.params.sortType,
    state.collectionArtistSearch
  ),
  release: state.release,
  artist: state.artist
});

const VisibleCollection = connect(mapStateToProps)(Collection);

export default VisibleCollection;
