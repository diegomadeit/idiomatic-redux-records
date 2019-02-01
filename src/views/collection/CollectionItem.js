import React, { Component } from "react";
import { fetchRecord, fetchArtist } from "../../data/api/records";
import Record from "../../components/record/Record";
import Artist from "../../components/artist/Artist";
import HoverLink from "../../components/common/HoverLink";

class CollectionItem extends Component {
  state = { release: {}, artist: {} };

  componentDidMount() {
    const { match } = this.props;
    const { recordId } = match.params;

    fetchRecord(recordId).then(release => {
      release.artists.length
        ? fetchArtist(release.artists[0].id).then(artist => {
            this.setState({ release, artist });
          })
        : this.setState({ release });
    });
  }

  render() {
    const { collectionPath } = this.props;
    const { release, artist } = this.state;

    return (
      <>
        <div className="row">{release && <Record release={release} />}</div>
        <div className="row">{artist && <Artist artist={artist} />}</div>
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
