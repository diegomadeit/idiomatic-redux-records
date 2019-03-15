import React, { Component } from "react";
import Record from "../../components/record/Record";
import Artist from "../../components/artist/Artist";
import HoverLink from "../../components/common/HoverLink";

class CollectionItem extends Component {
  componentDidMount() {
    const { match, addToVisited } = this.props;
    addToVisited(match.params.recordId);
  }

  render() {
    const { collectionPath, release, artist } = this.props;

    return (
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
    );
  }
}

export default CollectionItem;
