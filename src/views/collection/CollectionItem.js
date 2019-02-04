import React, { Component } from "react";
import { fetchRecord, fetchArtist } from "../../data/api/records";
import Record from "../../components/record/Record";
import Artist from "../../components/artist/Artist";
import HoverLink from "../../components/common/HoverLink";
import Loader from "../../components/common/Loader";

class CollectionItem extends Component {
  state = { release: {}, artist: {}, loaded: false };

  componentDidMount() {
    const { match } = this.props;
    const { recordId } = match.params;

    fetchRecord(recordId).then(release => {
      fetchArtist(release.artists[0].id).then(artist => {
        this.setState({ release, artist, loaded: true });
      });
    });
  }

  render() {
    const { collectionPath } = this.props;
    const { release, artist, loaded } = this.state;

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
