import { connect } from "react-redux";
import Collection from "../views/collection/Collection";
import { SortTypes } from "../actions/sorting";

const compareReleaseArtist = (release1, release2) => {
  if (
    release1.basic_information.artists[0].name >
    release2.basic_information.artists[0].name
  ) {
    return 1;
  }
  if (
    release1.basic_information.artists[0].name <
    release2.basic_information.artists[0].name
  ) {
    return -1;
  }
  return 0;
};

const compareReleaseYear = (release1, release2) => {
  if (release1.basic_information.year > release2.basic_information.year) {
    return 1;
  }
  if (release1.basic_information.year < release2.basic_information.year) {
    return -1;
  }
  return 0;
};

const getSortedReleases = (releases, sorter) => {
  switch (sorter) {
    case SortTypes.BY_ARTIST:
      return [...releases].sort((r1, r2) => compareReleaseArtist(r1, r2));
    case SortTypes.BY_YEAR:
      return [...releases].sort((r1, r2) => compareReleaseYear(r1, r2));
    case SortTypes.DEFAULT:
    default:
      return releases;
  }
};

const mapStateToProps = state => ({
  pagination: state.collection.pagination,
  releases: getSortedReleases(state.collection.releases, state.collectionSorter)
});

const SortedCollection = connect(mapStateToProps)(Collection);

export default SortedCollection;
