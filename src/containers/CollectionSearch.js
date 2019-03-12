import { connect } from "react-redux";
import { searchArtist } from "../actions/search";
import RecordSearch from "../components/record/RecordSearch";
import { getCollectionArtistSearch } from "../reducers";

const mapStateToProps = state => ({
  searchArtist: getCollectionArtistSearch(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: event => {
    event.preventDefault();
    return;
  },
  onChange: artist => dispatch(searchArtist(artist))
});

const CollectionSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordSearch);

export default CollectionSearch;
