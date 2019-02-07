import { connect } from "react-redux";
import Button from "../components/common/Button";
import { sortCollection } from "../actions/sorting";

const mapStateToProps = (state, ownProps) => ({
  active: state.collectionSorter === ownProps.sortType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(sortCollection(ownProps.sortType))
});

const CollectionSorter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default CollectionSorter;
