import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CollectionItem from "../views/collection/CollectionItem";
import * as actions from "../actions";
import { withRouter } from "react-router";
import {
  getCollectionItemArtist,
  getCollectionItemRelease,
  isCollectionItemFetching,
  getCollectionItemErrorMessage
} from "../reducers";
import Loader from "../components/common/Loader";
import FetchError from "../components/common/FetchError";

class VisibleCollectionItem extends Component {
  componentDidMount() {
    const { fetchCollectionItem, match } = this.props;
    const { artistId, recordId } = match.params;
    fetchCollectionItem(artistId, recordId);
  }

  render() {
    const {
      collectionPath,
      release,
      artist,
      isFetching,
      errorMessage,
      fetchCollectionItem
    } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (errorMessage) {
      return (
        <FetchError message={errorMessage} onRetry={fetchCollectionItem} />
      );
    }

    return (
      <CollectionItem
        collectionPath={collectionPath}
        release={release}
        artist={artist}
      />
    );
  }
}

VisibleCollectionItem.propTypes = {
  collectionPath: PropTypes.string.isRequired,
  release: PropTypes.object.isRequired,
  artist: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  fetchCollectionItem: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state, { collectionPath }) => ({
  artist: getCollectionItemArtist(state),
  release: getCollectionItemRelease(state),
  isFetching: isCollectionItemFetching(state),
  errorMessage: getCollectionItemErrorMessage(state),
  collectionPath
});

VisibleCollectionItem = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleCollectionItem)
);

export default VisibleCollectionItem;
