import React, { Component } from "react";
import Record from "../../components/record/Record";
import Artist from "../../components/artist/Artist";
import HoverLink from "../../components/common/HoverLink";
import Loader from "../../components/common/Loader";

class CollectionItem extends Component {
  state = { loaded: false };

  componentDidMount() {
    const { match, addToVisited } = this.props;
    addToVisited(match.params.recordId);

    this.setState({ loaded: true });
  }

  render() {
    const { collectionPath, release, artist } = this.props;
    const { loaded } = this.state;

    return loaded ? (
      <>
        <div className="row">{<Record release={release} />}</div>
        <div className="row">{<Artist artist={artist} />}</div>
        <div className="row">
          <HoverLink
            to={collectionPath}
            className="button"
            hoverClass="button--hover"
          >
            <span>Back to collection</span>
          </HoverLink>
        </div>
      </>
    ) : (
      <Loader />
    );
  }
}

export default CollectionItem;
