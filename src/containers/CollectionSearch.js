import { connect } from "react-redux";
import { searchArtist } from "../actions/search";
import RecordSearch from "../components/record/RecordSearch";

const mapDispatchToProps = dispatch => ({
  onSubmit: event => {
    event.preventDefault();
    return;
  },
  onChange: artist => dispatch(searchArtist(artist))
});

const CollectionSearch = connect(
  null,
  mapDispatchToProps
)(RecordSearch);

export default CollectionSearch;
